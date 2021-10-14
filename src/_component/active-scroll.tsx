/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
export const ActiveScroll = () => {
  const container = document.querySelector('.container') as HTMLDivElement;
  const main = document.querySelector('main') as HTMLDivElement;
  const mapPage = document.querySelector('.modal-marker') as HTMLDivElement;

  if (main && !mapPage) {
    console.log(main.scrollTop);
    if (main.scrollTop > 20) {
      console.log('add');
      container.classList.add('scroll');
    } else {
      console.log('remove');
      container.classList.remove('scroll');
    }
  }
};
