//burger menu
const icon = document.querySelector('.icon');
const burgerMenu = document.querySelector('.burger_menu');
const prev=document.querySelector('.prev');
const prev2=document.querySelector('.prev2');
const sidebar=document.querySelector('.side__bar');
const sidebar_btn=document.querySelector('.fa.fa-bars.sidebar-bar');

if(icon){
    icon.addEventListener('click',function(e){
        burgerMenu.classList.toggle('_active');
    })
}

prev.addEventListener('click',function(e){
    burgerMenu.classList.remove('_active');
})

sidebar_btn.addEventListener("click",function(e){
    sidebar.classList.toggle("_active");
})

prev2.addEventListener('click',function(e){
    sidebar.classList.remove('_active');
})




