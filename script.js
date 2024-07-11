let ServicesImageId1 = document.getElementById("services-img-id-1");
let ServicesImageId2 = document.getElementById("services-img-id-2");
let ServicesImageId3 = document.getElementById("services-img-id-3");
let ServicesDetail1 = document.getElementById("services-detail-1");
let ServicesDetail2 = document.getElementById("services-detail-2");
let ServicesDetail3 = document.getElementById("services-detail-3");

// SERVICES IMAGE 1 
ServicesImageId1.addEventListener("mouseover" , function (){
ServicesDetail1.style.transform = 'translateY(-100%)';
})

ServicesImageId1.addEventListener("mouseout" , function(){
    ServicesDetail1.style.transform = 'translateY(0)';
})
// SERVICES IMAGE 2 
ServicesImageId2.addEventListener("mouseover" , function (){
    ServicesDetail2.style.transform = 'translateY(-100%)';
    })
    
    ServicesImageId2.addEventListener("mouseout" , function(){
        ServicesDetail2.style.transform = 'translateY(0)';
    })
// SERVICES IMAGE 3
ServicesImageId3.addEventListener("mouseover" , function (){
    ServicesDetail3.style.transform = 'translateY(-100%)';
    })
    
    ServicesImageId3.addEventListener("mouseout" , function(){
        ServicesDetail3.style.transform = 'translateY(0)';
    })


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
// SIDE BAR LOGICS
let SidebarIcon = document.getElementById('sidebar-icon');
let CloseIcon = document.getElementById('close-icon');
let SideBar = document.getElementById('sidebar');

SidebarIcon.addEventListener('click' , function(){
    SideBar.style.transform = 'translateX(0)';
    SidebarIcon.style.display = 'none';
    CloseIcon.style.display = 'block';
})

CloseIcon.addEventListener('click' , function(){
    SideBar.style.transform = 'translateX(100%)';
    SidebarIcon.style.display = 'block';
    CloseIcon.style.display = 'none';
})

