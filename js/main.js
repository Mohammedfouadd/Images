let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let number = document.querySelectorAll('.number span')
let box = document.querySelector('.box')

let numbrImage = 1;

next.onclick = function (){
    numbrImage++
    if(numbrImage > 10){
        box.innerHTML =  `<P>Image Not Found</p>`

        }else{
        box.innerHTML =  `<img src="imags/${numbrImage}.jpg" alt="">`

        }  

    handelSpan()
}
previous.onclick = function (){
    numbrImage--
    if(numbrImage < 1){
    box.innerHTML =  `<P>Image Not Found</p>`

    }else{
    box.innerHTML =  `<img src="imags/${numbrImage}.jpg" alt="">`

    }

    handelSpanemte()
}

let ArraySpan = Array.from(number);

ArraySpan.forEach((span, index) => {
       
    if(numbrImage == index){
        span.className = "on"

    }
})   

function handelSpan(){
    ArraySpan.forEach((span, index) => {
       
        if(numbrImage == index){
            span.className = "on"
  

        }
    })  
}

 function handelSpanemte(){
    ArraySpan.forEach((span, index) => {
       
        if((numbrImage ) + 1 === index){
            span.className = ""
        }
    })  
 }
    