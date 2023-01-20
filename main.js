import {containerAnimation} from './animation.js';

containerAnimation();

const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', ()=> {
    clearActiveClassess();
    slide.classList.add('active');
  })
});

function clearActiveClassess(){
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
}

 /* background-image: url('https://ltdfoto.ru/images/2023/01/19/Tokyo1d17834b13fd81a5.jpg'); */
