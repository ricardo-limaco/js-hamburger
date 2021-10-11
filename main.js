
  const menu = document.querySelector(".hamburger-menu");
  const menuActive = document.querySelector(".header-right > a");
  const menuClose = document.querySelector(".hamburger-menu .close");

menuActive.addEventListener("click", function(){
  menu.classList.add("active");
});
menuClose.addEventListener("click", function(){
  menu.classList.remove("active");
});




