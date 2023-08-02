import { Options } from '@splidejs/splide'

export const mainOptions: Options = {
  type: 'fade',
  perPage: 1,
  perMove: 1,
  pagination: false,
  height: '46rem',
  breakpoints: {
    768: {
      height: '40rem'
    },
    550: {
      height: '25rem'
    }
  }
}

export const thumbsOptions: Options = {
  type: 'slide',
  rewind: true,
  gap: '1rem',
  pagination: false,
  fixedWidth: 100,
  fixedHeight: 100,
  cover: true,
  focus: 'center',
  isNavigation: true,
  direction: 'ttb',
  height: '28rem',
  breakpoints: {
    768: {
      height: '20rem',
      fixedWidth: 60,
      fixedHeight: 60
    },
    550: {
      height: '15rem',
      fixedWidth: 40,
      fixedHeight: 40
    }
  }
}
