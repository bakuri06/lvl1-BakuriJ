//burger menu
const icon = document.querySelector('.icon');
const burgerMenu = document.querySelector('.burger_menu');
const prev=document.querySelector('.prev');
const prev2=document.querySelector('.prev2');
const sidebar=document.querySelector('.side__bar');
const sidebar_btn=document.querySelector('.fa.fa-bars.sidebar-bar');
const cover=document.querySelector('.cover');
const close=document.querySelector('button.btn-close');


if(icon){
    icon.addEventListener('click',function(e){
        e.stopPropagation();
        burgerMenu.classList.toggle('_active');
    })
   
    cover.addEventListener('click',(e)=>{
        if(burgerMenu.classList.contains("_active")){
            burgerMenu.classList.remove("_active");
        }
    })
}

burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
})


prev.addEventListener('click',function(e){
    burgerMenu.classList.remove('_active');
})

sidebar_btn.addEventListener("click",function(e){
    sidebar.classList.toggle("_active");
})

prev2.addEventListener('click',function(e){
    sidebar.classList.remove('_active');
})


setTimeout(function(){ 
    document.getElementById("exampleModal").style.display = "block";
}, 3000);

close.addEventListener("click",closeModal);

function closeModal(e){
    document.getElementById("exampleModal").style.display = "none";
}