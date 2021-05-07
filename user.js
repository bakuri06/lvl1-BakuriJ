let input = document.getElementById('uniq');

let show = document.querySelector('.show');


let datavalue;

document.querySelector('.but').addEventListener('click',function(){
    console.log(input.value);
    fetch(`https://itunes.apple.com/search?term=${input.value}`)
        .then(response => response.json())
        .then(data => {

            datavalue = data.results;
            console.log(datavalue);
            render();
        })
})

function render(){  
    let smth = '';
    for(let i=0;i<datavalue.length;i++){
        smth+=`
        <div class="container smth">
            <h2>${datavalue[i].artistName}</h2>
            <audio controls>
                <source src="${datavalue[i].previewUrl}" type="audio/mpeg">
            </audio
        </div>
        `;

        console.log(datavalue[i].previewUrl);

    }
    show.innerHTML+=smth;

}
