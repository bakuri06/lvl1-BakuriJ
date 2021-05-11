//burger menu
const icon = document.querySelector('.icon');
const menuBody = document.querySelector('.menu_body');

if(icon){
    icon.addEventListener('click',function(e){
        icon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}

//scrolling

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
console.log(menuLinks);

if(menuLinks.length > 0){
    menuLinks.forEach(link => {
        link.addEventListener('click',onMenuClick)
    });
    function onMenuClick(e){
        const link = e.target;
        if(link.dataset.goto && document.querySelector(link.dataset.goto)){
            const gotoBlock = document.querySelector(link.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.beauty').offsetHeight;

            if(icon.classList.contains('_active')){
                icon.classList.remove('_active');
                menuBody.classList.remove('_active');
                document.body.classList.remove('_lock');
            }
            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}


//modal

const clickMe=document.querySelector('.glow-on-hover');
const covered=document.querySelector('.covered');
const answer=document.getElementById('no');


clickMe.addEventListener('click',function(e){
    if(clickMe){
        covered.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    }
});

if(answer){
    answer.addEventListener('click',function(){
        covered.classList.remove('_active');
        document.body.classList.toggle('_lock');
    })
}