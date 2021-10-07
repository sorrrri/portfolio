/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
export const ActiveScroll = () => {
  const container = document.querySelector('.container') as HTMLDivElement;
  const main = document.querySelector('main') as HTMLDivElement;
  const mapPage = document.querySelector('.modal-marker') as HTMLDivElement;

  if (main && !mapPage) {
    if (main.scrollTop > 50) {
      container.classList.add('scroll');
    } else {
      container.classList.remove('scroll');
    }
  }
};
