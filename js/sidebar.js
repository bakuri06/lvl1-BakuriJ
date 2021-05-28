/*export function generateProducts(lgcol=4,mdcol=6,smcol=6,changedLength=20){
    let tmp = '';

    for(let i=0;i<changedLength;i++){
            tmp+=`<div class="col-lg-${lgcol} col-md-${mdcol} col-sm-${smcol} position-relative">
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

export function generateGridLayout(){
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
*/

