burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('hNavResp')
    navList.classList.toggle('vClassResp')
    rightNav.classList.toggle('vClassResp')
});