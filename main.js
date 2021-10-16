const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function (){
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
  link.addEventListener('click', function (){
    nav.classList.remove('show')
  })
}
/*acrescentar sombra no header da pagina ao dar scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function (){
  if (window.scrollY >= navHeight) {
    //maior que a altura do header
    header.classList.add('scroll')
  }else{
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  keyboard: true,
  slidesPerView: 1,
  mousewheel: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
  
})

//scrollReveal
// const scrollReveal = ScrollReveal({
// origin: 'top',
// distance: '30px',
// duration: 700,
// reset: true
//   })
// scrollReveal.reveal(
//   `#home .image, #home .text, 
//   #about .image, #about .text,
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials
//   #contact .text, #contact .links,
//   footer .brand, footer .social
//   `,{interval: 100})

//Botão voltar ao topo
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
  backToTopButton.classList.remove('show')
}
})     
  

