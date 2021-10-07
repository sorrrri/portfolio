/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
export const ActiveScroll = () => {
  const container = document.querySelector('.container') as HTMLDivElement;
  const main = document.querySelector('main') as HTMLDivElement;
  const workspaceList = document.querySelector('main.workspace.list');
  const mapPage = document.querySelector('.modal-marker') as HTMLDivElement;
  // const bottomStickyMenu = document.querySelector('.bottom-sticky-menu') as HTMLDivElement;

  if (main && !mapPage) {
    if (main.scrollTop > 50) {
      container.classList.add('scroll');
    } else {
      container.classList.remove('scroll');
    }
    if (workspaceList) {
      if (main.scrollHeight - (main.scrollTop + main.offsetHeight) < 1) {
        console.log('tt');
      }
    }
  }
};
