function initCarousel() {
  let carousel = document.querySelector('.carousel'),
    buttonPrev = carousel.querySelector('.carousel__arrow_left'),
    buttonNext = carousel.querySelector('.carousel__arrow_right'),
    carouselTrack = carousel.querySelector('.carousel__inner'),
    countSlides = carousel.querySelectorAll('.carousel__slide').length,
    widthSlide = carousel.querySelectorAll('.carousel__slide')[0].clientWidth,
    currentPosition = 1;
    buttonPrev.style.display = 'none';

    buttonPrev.addEventListener('click', () => {
      if ( currentPosition > 0 ) {
        carouselTrack.style.transform = `translateX(-${ (widthSlide * --currentPosition) - widthSlide }px)`;
        buttonNext.style.display = 'flex';
      }
      if ( currentPosition <= 1 ) {
        buttonPrev.style.display = 'none';
      }
    });

    buttonNext.addEventListener('click', () => {
      if ( currentPosition < countSlides ) {
        carouselTrack.style.transform = `translateX(-${widthSlide * currentPosition++}px)`;
        buttonPrev.style.display = 'flex';
      }
      if ( currentPosition >= countSlides ) {
        buttonNext.style.display = 'none';
      }
    });
}
