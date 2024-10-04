// 创建导航按钮
function createNavButton(messageKey, position) {
  const button = document.createElement('div');
  button.textContent = chrome.i18n.getMessage(messageKey);
  button.className = `nav-button ${position}`;
  document.body.appendChild(button);
  return button;
}

// 创建上一页和下一页按钮
const prevButton = createNavButton('previousButton', 'prev');
const nextButton = createNavButton('nextButton', 'next');

// 处理键盘事件
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    // 模拟点击上一页
    prevButton.click();
  } else if (e.key === 'ArrowRight') {
    // 模拟点击下一页
    nextButton.click();
  }
});

// 查找并点击实际的上一页/下一页链接
function clickNavLink(direction) {
  const links = document.querySelectorAll('a');
  const translatedText = chrome.i18n.getMessage(direction === 'prev' ? 'previousButton' : 'nextButton');
  const searchTexts = direction === 'prev' 
    ? [translatedText, '上一页', '上一頁', 'Previous', '&lt;', '‹'] 
    : [translatedText, '下一页', '下一頁', 'Next', '&gt;', '›'];
  
  for (const link of links) {
    if (searchTexts.some(text => link.textContent.includes(text) || link.innerHTML.includes(text))) {
      link.click();
      return;
    }
  }
}

// 为按钮添加点击事件
prevButton.addEventListener('click', () => clickNavLink('prev'));
nextButton.addEventListener('click', () => clickNavLink('next'));