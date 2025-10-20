let navBar = document.querySelector(".header__menu")
let lastScrollTop = 0
let headerHidden = false
let pages = document.querySelectorAll(".header__menu li")
let colorCard = document.querySelectorAll(".projets__content__card")
let projectImgs = document.querySelectorAll(".projets__content__card__layer a")


if (window.matchMedia("(pointer : fine)").matches) {
  window.addEventListener("mousemove" , Projbouge)
  window.addEventListener("mouseout" , Projpart)
}
window.addEventListener("scroll" , scrollHeader)


pages.forEach(page => page.addEventListener("mouseenter" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1.1)"
  titleLink.style.color = "#fff"
}))
pages.forEach(page => page.addEventListener("mouseleave" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1)"
  titleLink.style.color = "rgba(240, 240, 240, 0.8)"
}))


function Projbouge(e){
  colorCard.forEach(card =>{
    let proj = card.querySelector(".projecteur")
    let cardRect = card.getBoundingClientRect() /* rectangle délimitant chaque carte*/
    proj.style.opacity = "1"
    proj.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%) , calc(${e.clientY  - cardRect.top}px - 50%))` /*déplacer le projecteur en fonction de la position de la souris */
  })
}
function Projpart(e){
  colorCard.forEach(card => {
    let proj = card.querySelector(".projecteur")
    proj.style.opacity = "0"
  });
}

function scrollHeader(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navBar.style.top = "-100px";
  } else if (scrollTop < lastScrollTop) {
    navBar.style.top = "50px";
  }
  if(scrollTop === 0 || scrollTop < 100){
    navBar.style.background = "transparent"
  }else {
    navBar.style.background = "#000"
  }
  lastScrollTop = scrollTop
}