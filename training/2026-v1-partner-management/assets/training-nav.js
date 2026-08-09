document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.sidebar nav');
  const current = nav?.querySelector(':scope > a.current');
  const sub = current?.nextElementSibling?.classList.contains('sub') ? current.nextElementSibling : null;
  if (!nav || !current || !sub) return;
  [...nav.children].forEach((node) => {
    if (node !== current && node !== sub) node.remove();
  });
  const back = document.createElement('a');
  back.className = 'training-back';
  back.href = '../index.html';
  back.textContent = '← 返回业务功能培训文档';
  const folder = document.createElement('details');
  folder.className = 'menu-folder';
  folder.open = true;
  const summary = document.createElement('summary');
  summary.textContent = current.textContent;
  folder.append(summary, sub);
  current.replaceWith(folder);
  nav.prepend(back);
});
