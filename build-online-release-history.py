from __future__ import annotations

import html
import re
from dataclasses import dataclass, field
from pathlib import Path

from docx import Document


SOURCE = Path('/Users/susan/Desktop/程程票务系统线上版本迭代说明.docx')
SITE = Path(__file__).resolve().parent
LIBRARY = SITE / 'business-versions' / 'online-release-history'
IMAGES = LIBRARY / 'assets' / 'images'


@dataclass
class Version:
    title: str
    version: str
    date: str
    blocks: list[str] = field(default_factory=list)
    functions: list[str] = field(default_factory=list)
    scopes: list[str] = field(default_factory=list)
    toc: list[tuple[int, str, str]] = field(default_factory=list)


def esc(text: str) -> str:
    return html.escape(text, quote=True).replace('\n', '<br>')


def slug(version: str) -> str:
    return 'online-' + version.lower().replace('.', '-')


def image_extension(part) -> str:
    content_type = getattr(part, 'content_type', '')
    return {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/gif': 'gif',
        'image/bmp': 'bmp',
        'image/tiff': 'tiff',
        'image/svg+xml': 'svg',
    }.get(content_type, 'png')


def extract_images(document: Document, paragraph, image_cache: dict[str, str]) -> list[str]:
    result = []
    for run in paragraph.runs:
        for blip in run._element.xpath('.//*[local-name()="blip"]'):
            relationship_id = None
            for key, value in blip.attrib.items():
                if key.endswith('}embed'):
                    relationship_id = value
                    break
            if not relationship_id:
                continue
            image_part = document.part.related_parts.get(relationship_id)
            if image_part is None:
                continue
            key = str(image_part.partname)
            if key not in image_cache:
                image_name = f'image-{len(image_cache) + 1:03d}.{image_extension(image_part)}'
                (IMAGES / image_name).write_bytes(image_part.blob)
                image_cache[key] = image_name
            result.append(image_cache[key])
    return result


def page(title: str, body: str, extra_css: str = '') -> str:
    return f'''<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title><link rel="stylesheet" href="../../assets/release-history.css">{extra_css}</head><body>{body}<button class="history-quick" onclick="window.scrollTo({{top:0,behavior:'smooth'}})" aria-label="返回顶部">↑</button></body></html>'''




def get_version_meta(title: str) -> tuple[str, str]:
    match = re.search(r'V\s*([\d.]+).*?（([^）]+)）', title)
    if not match:
        return title, ''
    raw_date = match.group(2).strip()
    parts = raw_date.split('/')
    if len(parts) == 3:
        date = f'20{parts[0]}-{parts[1].zfill(2)}-{parts[2].zfill(2)}'
    else:
        date = raw_date
    return f'V{match.group(1)}', date


def release_summary(item: Version) -> tuple[str, str, str]:
    """Build concise list metadata from the source document headings."""
    coverages: list[str] = []
    builds: list[str] = []
    for scope in item.scopes:
        build = re.search(r'版本号[：:]\s*([^\s，；]+)', scope)
        if build and build.group(1) not in builds:
            builds.append(build.group(1))
        coverage = re.sub(r'[-—–]?\s*版本号[：:].*$', '', scope).strip()
        coverage = re.sub(r'^[一二三四五六七八九十]+\.', '', coverage).strip()
        coverage = coverage.replace('+', '、')
        coverage = coverage.replace('PDA/闸机检票设备', 'PDA')
        coverage = coverage.strip(' -—–')
        if coverage and coverage not in coverages:
            coverages.append(coverage)
    roles: list[str] = []
    for level, text, _ in item.toc:
        role = re.sub(r'关注[：:]?$', '', text).strip(' ：:')
        if level == 3 and role and role not in roles:
            roles.append(role)
    return '、'.join(roles) or '相关业务人员', '、'.join(coverages) or '系统功能', '、'.join(builds)


def clean_function_title(text: str) -> str:
    return re.sub(r'^\s*(?:\d+[.、．]|[（(]\d+[）)])\s*', '', text).strip()


def build() -> list[Version]:
    LIBRARY.mkdir(parents=True, exist_ok=True)
    IMAGES.mkdir(parents=True, exist_ok=True)
    document = Document(SOURCE)
    versions: list[Version] = []
    current: Version | None = None
    started = False
    image_cache: dict[str, str] = {}

    for paragraph in document.paragraphs:
        style = paragraph.style.name
        text = paragraph.text.strip()
        if style == 'Heading 2' and '版本更新说明' in text:
            started = True
            version, date = get_version_meta(text)
            current = Version(title=text, version=version, date=date)
            versions.append(current)
            continue
        if not started or current is None:
            continue

        images = extract_images(document, paragraph, image_cache)
        if style == 'Heading 3' and text:
            anchor = f'item-{len(current.toc) + 1}'
            current.scopes.append(text)
            current.toc.append((2, text, anchor))
            current.blocks.append(f'<h2 id="{anchor}">{esc(text)}</h2>')
        elif style == 'Heading 4' and text:
            anchor = f'item-{len(current.toc) + 1}'
            current.toc.append((3, text, anchor))
            current.blocks.append(f'<h3 id="{anchor}">{esc(text)}</h3>')
        elif style == 'Heading 5' and text:
            anchor = f'item-{len(current.toc) + 1}'
            current.functions.append(text)
            current.toc.append((4, text, anchor))
            current.blocks.append(f'<h4 id="{anchor}">{esc(text)}</h4>')
        elif text:
            current.blocks.append(f'<p>{esc(text)}</p>')
        for image in images:
            current.blocks.append(f'<img src="assets/images/{image}" alt="{esc(current.version)} 版本功能示意图">')

    for index, item in enumerate(versions):
        previous = versions[index - 1] if index else None
        next_item = versions[index + 1] if index + 1 < len(versions) else None
        previous_link = f'<a href="{slug(previous.version)}.html">← {esc(previous.version)}</a>' if previous else '<span></span>'
        next_link = f'<a href="{slug(next_item.version)}.html">{esc(next_item.version)} →</a>' if next_item else '<span></span>'
        toc = ''.join(
            f'<a class="toc-lvl-{level}" href="#{anchor}">{esc(text)}</a>'
            for level, text, anchor in item.toc
        )
        version_folders = []
        for other in reversed(versions):
            detail_links = ''.join(
                f'<a class="toc-lvl-{level}" href="{slug(other.version)}.html#{anchor}">{esc(text)}</a>'
                for level, text, anchor in other.toc
            )
            current = ' open' if other.version == item.version else ''
            active = ' active' if other.version == item.version else ''
            version_folders.append(f'''<details class="version-folder"{current}><summary class="{active.strip()}">{esc(other.version)} · {esc(other.date)}</summary><div class="folder-detail">{detail_links}</div></details>''')
        body = f'''<aside class="history-sidebar"><h2>历史线上版本迭代说明</h2><p class="version-meta">{esc(item.version)} · {esc(item.date)}</p><a href="index.html">← 返回历史版本目录</a><div class="nav-title">全部历史版本与明细</div>{''.join(version_folders)}</aside><main class="history-main"><header class="history-hero"><div class="eyebrow">程程票务系统线上版本迭代说明</div><h1>{esc(item.version)} 版本更新说明</h1><p>上线日期：{esc(item.date)}</p><a class="history-back" href="index.html">返回版本清单</a></header><article class="version-content">{''.join(item.blocks)}</article><nav class="history-nav">{previous_link}<a href="index.html">版本清单</a>{next_link}</nav></main>'''
        (LIBRARY / f'{slug(item.version)}.html').write_text(page(f'{item.version}｜线上版本迭代说明', body), encoding='utf-8')

    rows = []
    for item in reversed(versions):
        features = [clean_function_title(feature) for feature in item.functions]
        feature_html = ''.join(f'<li>{esc(feature)}</li>' for feature in features)
        roles, coverage, build = release_summary(item)
        build_html = f'<span class="release-chip build"><b>PDA 版本号</b>{esc(build)}</span>' if build else ''
        rows.append(f'''<article class="release-item"><div class="release-line"><span class="version">{esc(item.version)}</span><span class="date">{esc(item.date)}</span><div class="release-meta"><span class="release-chip roles"><b>关注角色</b>{esc(roles)}</span><span class="release-chip coverage"><b>覆盖范围</b>{esc(coverage)}</span>{build_html}</div><a class="release-view" href="{slug(item.version)}.html">查看完整说明 ↗</a><details><summary><span class="expand-open">展开简介</span><span class="expand-close">收起简介</span></summary><div class="intro"><p><b>本次功能简介</b></p><ul>{feature_html}</ul></div></details></div></article>''')
    index_body = f'''<main class="history-index"><header class="history-hero"><div class="eyebrow">业务版本迭代说明</div><h1>历史线上版本迭代说明</h1><p>按上线时间倒序整理，点击版本行可展开查看本次功能简介。</p><a class="history-back" href="../../index.html">返回文档集首页</a></header><section class="release-list">{''.join(rows)}</section></main>'''
    (LIBRARY / 'index.html').write_text(page('历史线上版本迭代说明', index_body), encoding='utf-8')
    return versions


if __name__ == '__main__':
    created = build()
    print(f'Built {len(created)} version HTML pages at {LIBRARY}')
