
//show menu

const menuLink = document.querySelector('.menu-bx');
const container = document.querySelector('.container-menu');
const menuAct = document.querySelector('.menu')

menuLink.addEventListener("click", () => {
  container.classList.toggle('open');
  menuAct.classList.toggle('active-menu')

})


//animations gsap

TweenMax.to(".sp-efct", 1, {
  delay:.3,
  opacity:1,
  
});
 
TweenMax.to("#teste", 1, {
  delay:.3,
  attr:{scale:0.0},

});
  

TweenMax.to(".mv-logo", .3, {
opacity:1,
transform: "scaleY(1)",

});

TweenMax.to(".c-1", .3, {
opacity:1,
transform: "scaleY(1)",

});

TweenMax.to(".line-d1", .3, {
opacity:1,
transform: "scaleY(1)",

});

TweenMax.to(".bg-c5", .3, {
opacity:1,
transform: "scaleY(1)",

});

TweenMax.to(".side-dots", .3, {
opacity:1,
transform: "scaleY(1)",

});

TweenMax.to(".navbar", .3, {
  delay:1,
  opacity:1,
  transform: "translateY(0px)",

});

TweenMax.to(".socials", .3, {
  delay:1,
  opacity:1,
  transform: "translateY(0px)",

});







