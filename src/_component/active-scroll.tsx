/* eslint-disable prefer-const */
const delta = 5;
let lastScrollTop = 0;

export const ActiveScroll = () => {
  const container = document.querySelector('.container') as HTMLDivElement;
  const main = document.querySelector('main') as HTMLDivElement;
  const bottomStickyMenu = document.querySelector('.bottom-sticky-menu') as HTMLDivElement;

  if (main.scrollTop > 50) {
    container.classList.add('scroll');
  } else {
    container.classList.remove('scroll');
  }

  // scroll이 감지될 떄, 하단 sticky menu의 활성화 여부
  let currentScrollTop = main.scrollTop;
  if (Math.abs(lastScrollTop - currentScrollTop) <= delta) {
    return;
  }
  if (currentScrollTop > lastScrollTop) {
    bottomStickyMenu.classList.remove('active');
  } else {
    bottomStickyMenu.classList.add('active');
  }
  lastScrollTop = currentScrollTop;
};
