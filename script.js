let Flag = 0;

function Controller(x){
    Flag = Flag + x;
    Slideshow(Flag);
}

function Slideshow(num){
    let Slides = document.getElementsByClassName('slide');

    if(num === Slides.length){
        Flag = 0;
        num = 0;
    }
    if(num < 0){
        Flag = Slides.length - 1;
        num = Slides.length - 1;
    }

    for(let y of Slides){
        y.style.display = 'none';
    }
    Slides[num].style.display = "block";

    
}
Slideshow(Flag);