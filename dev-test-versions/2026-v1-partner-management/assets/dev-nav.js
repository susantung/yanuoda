document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.sidebar nav');
  if (!nav || nav.querySelector('.back-to-library')) return;
  nav.querySelector('a[href="business-training.html"]')?.remove();
  const back = document.createElement('a');
  back.className = 'back-to-library';
  back.href = '../index.html';
  back.textContent = '← 返回版本迭代需求说明';
  nav.prepend(back);
  [...nav.querySelectorAll(':scope > .sub')].forEach((sub) => {
    const trigger = sub.previousElementSibling;
    if (!trigger || trigger.tagName !== 'A') return;
    const folder = document.createElement('details');
    folder.className = 'menu-folder';
    folder.open = trigger.classList.contains('current');
    const summary = document.createElement('summary');
    summary.textContent = trigger.textContent;
    folder.append(summary, sub);
    trigger.replaceWith(folder);
  });
});
