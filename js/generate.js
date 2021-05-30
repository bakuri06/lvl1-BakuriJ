//import {generateProducts,generateGridLayout } from './js/sidebar.js';

const mainn=document.querySelector('.main');
//changing theme
const body=document.querySelector("body");
const dark=document.querySelector(".dark-btn");

const firsth2=document.querySelector(".page-title h2");
const collection = document.querySelector(".collection");
const collection_view = document.querySelector(".collection-view ul");
const search_count = document.querySelector(".search-count h5");
const product_detail = document.querySelectorAll("h4");
const labels=document.querySelectorAll("label");
const collectionfilter=document.querySelector('.collection-filter-block');

const header_contact=document.querySelectorAll(".header_contact ul");
const top_header=document.querySelector(".top_header");
const dropbtn= document.querySelector(".dropbtn");


dark.addEventListener("click",function(e){
    body.classList.toggle("bg-dark");
})

//finish

const layoutview2 = document.querySelector(".product-2-layout-view");
const layoutview3 = document.querySelector(".product-3-layout-view")
const layoutview4 = document.querySelector(".product-4-layout-view")
const layoutview6 = document.querySelector(".product-6-layout-view")

const arrowd = document.querySelector("#arrow_d");
const arrowdown = document.querySelector("#arrow_down");
const arrowdown3 = document.querySelector("#arrow_down3");

const blockContent = document.querySelector(".collection-collapse-block-content");
const blockContent2 = document.querySelector(".collection-collapse-block-content_2");
const blockContent3 = document.querySelector(".collection-collapse-block-content_3");


arrowd.addEventListener("click",(e)=>{
    e.preventDefault();
    blockContent.classList.toggle("none");
})

arrowdown.addEventListener("click",(e)=>{
    e.preventDefault();
    blockContent2.classList.toggle("none");
})

arrowdown3.addEventListener("click",(e)=>{
    e.preventDefault();
    blockContent3.classList.toggle("none");
})


let datavalue;
let sorting = document.querySelector("#information");

let fullLayoutView = document.querySelector(".list-layout-view");
let gridLayoutView=document.querySelector(".grid-layout-view");

//changing layout view
layoutview2.addEventListener('click',function(e){
    document.getElementById("mainlyy").className = "row row-cols-lg-2 row-cols-md-3";
})

layoutview3.addEventListener('click',function(e){
    document.getElementById("mainlyy").className = "row row-cols-lg-4 row-cols-md-3";
})

layoutview4.addEventListener('click',function(e){
    document.getElementById("mainlyy").className = "row row-cols-lg-3 row-cols-md-3";
})

layoutview6.addEventListener('click',function(e){
    document.getElementById("mainlyy").className = "row row-cols-lg-6 row-cols-md-3";
})

//make it full

fullLayoutView.addEventListener("click",()=>{
    mainn.innerHTML="";
    generateGridLayout();
    document.getElementById("mainlyy").className = "row row-cols-lg-1";
})

gridLayoutView.addEventListener("click",()=>{
    generateProducts();
})


sorting.addEventListener('change',()=>{
    if(sorting.value=="MinProducts"){
        generateProducts(12)
    }

    if(sorting.value=="NormalProducts"){
        generateProducts(15)
    }

    if(sorting.value=="HighProducts"){
        generateProducts(20)
    }
    
})

fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> 
            {
            datavalue=json;
            generateProducts(20);
            }
)

function generateProducts(changedLength=20){
    let tmp = '';

    for(let i=0;i<changedLength;i++){
            tmp+=`<div class="col position-relative">
            <div class="position-relative">
                <img src="${datavalue[i].image}" class="w-100"alt="">
                </div>
    
                <div class="product_detail">
                    <div class="ratings">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                <h4>${datavalue[i].title}</h4>
                <h5>${datavalue[i].price}$</h5>
                <ul class="color-variant">
                    <li class="bg-light0"></li>
                    <li class="bg-light1"></li>
                    <li class="bg-light2"></li>
                </ul>
            </div>
        </div>
    `
    }
    mainn.innerHTML=tmp;
}
        
function generateGridLayout(){
    let tmp="";

    for(let i=0;i<20;i++){
        tmp+=`
        <div class="col">
        <div class="d-flex align-items-center">
      <div class="img-wrapper">
         <img src="${datavalue[i].image}" class="w-100" alt="">
      </div>
      <div class="px-3">
         <div>
            <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>

            <p>${datavalue[i].title}
            </p>
            <h4>${datavalue[i].price}$</h4>
            <ul class="color-variant">
               <li class="bg-light0"></li>
               <li class="bg-light1"></li>
               <li class="bg-light2"></li>
            </ul>
         </div>
      </div>
   </div>
</div>
        `
    }
    mainn.innerHTML+=tmp;
}
        





