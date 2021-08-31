import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.arrowNavigation();
    this.addGood();
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    for ( let slide of this.slides ) {
      this.slide = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);

      this.elem.querySelector('.carousel__inner').append(this.slide);
    }
  }

  arrowNavigation() {
    let arrowPrev = this.elem.querySelector('.carousel__arrow_left');
    let arrowNext = this.elem.querySelector('.carousel__arrow_right');
    let carouselTrack = this.elem.querySelector('.carousel__inner');
    let countSlides = this.elem.querySelectorAll('.carousel__slide').length;
    let currentPosition = 1;

    arrowPrev.style.display = 'none';

    this.elem.addEventListener('click', (event) => {
      let widthSlide = this.elem.querySelectorAll('.carousel__slide')[0].offsetWidth;
      if ( event.target.closest('.carousel__arrow_right') !== null ) {
         if ( currentPosition < countSlides ) {
          carouselTrack.style.transform = `translateX(-${widthSlide * currentPosition++}px)`;
          arrowPrev.style.display = '';
        }
        if ( currentPosition >= countSlides ) {
          arrowNext.style.display = 'none';
        }
      }

      if ( event.target.closest('.carousel__arrow_left') !== null ) {
        if ( currentPosition > 0 ) {
          carouselTrack.style.transform = `translateX(-${ (widthSlide * --currentPosition) - widthSlide }px)`;
          arrowNext.style.display = '';
        }
        if ( currentPosition <= 1 ) {
          arrowPrev.style.display = 'none';
        }
      }
    });
  }

  addGood() {
    this.elem.addEventListener('click', (event) => {
      if ( event.target.closest('.carousel__button') !== null ) {
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: event.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        }));
      }
    });
  }
}
