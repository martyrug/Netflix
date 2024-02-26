const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
const watchCarousel = (carousels) => {
  carousels.forEach(carousel => {
    if (carousel.boundingClientRect.top > 0 && carousel.isIntersecting) {
      carousel.target.classList.add("container-enter-animation");
      carousel.target.classList.remove("container-hidden");
      } else if (carousel.boundingClientRect.top < 0 && carousel.isIntersecting) {
      carousel.target.classList.add("container-exit-animation");
      carousel.target.classList.remove("container-hidden");
      } else {
      carousel.target.classList.add("container-hidden");
      carousel.target.classList.remove("container-enter-animation");
      carousel.target.classList.remove("container-exit-animation");
      }
  })
}
const carousels = document.querySelectorAll(".movie-carousel");
const observer = new IntersectionObserver(watchCarousel, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3, 
})
carousels.forEach(carousel => {
  observer.observe(carousel)
})