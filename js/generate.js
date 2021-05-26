const uniqaa=document.querySelector(".uniqal");

const mainn=document.querySelector('.main');

const layoutview2 = document.querySelector(".product-2-layout-view");
const layoutview3 = document.querySelector(".product-3-layout-view")
const layoutview4 = document.querySelector(".product-4-layout-view")
const layoutview6 = document.querySelector(".product-6-layout-view")

let datavalue;
let sorting = document.querySelector("#information");

let fullLayoutView = document.querySelector(".list-layout-view");
let gridLayoutView=document.querySelector(".grid-layout-view");

//changing layout view
layoutview2.addEventListener('click',function(e){
    generateProducts(6,6,6);
})

layoutview3.addEventListener('click',function(e){
    generateProducts(4,6,6);
})

layoutview4.addEventListener('click',function(e){
    generateProducts(3,6,6);
})

layoutview6.addEventListener('click',function(e){
    generateProducts(2,6,6);
})

//make it full

fullLayoutView.addEventListener("click",()=>{
    mainn.innerHTML="";
    generateGridLayout();
    
})

gridLayoutView.addEventListener("click",()=>{
    generateProducts(3,6,6);
})


sorting.addEventListener('click',()=>{
    if(sorting.value=="MinProducts"){
        generateProducts(2,6,6,12)
    }

    if(sorting.value=="NormalProducts"){
        generateProducts(4,6,6,12)
    }

    if(sorting.value=="HighProducts"){
        generateProducts(3,6,6,12)
    }
    
})

fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> 
            {
            datavalue=json;
            generateProducts(3,4,6,20);
            }
)
    
function generateProducts(lgcol=4,mdcol=6,smcol=6,changedLength=20){
    let tmp = '';

    for(let i=0;i<changedLength;i++){
            tmp+=`<div class="col-lg-${lgcol} col-md-${mdcol} col-sm-${smcol} position-relative">
            <div class="position-relative">
                <img src="${datavalue[i].image}" class="w-100 makeitright"alt="">
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
        <div class="col-lg-12">
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
        




