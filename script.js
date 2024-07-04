let DealsImages = document.querySelectorAll('deals-img');

let SlideIndex = 0;
// DealsImages[SlideIndex].classList.add('active');

// function GoNext(){

//     DealsImages[SlideIndex].classList.remove('active');
//     SlideIndex = (SlideIndex === DealsImages.length - 1) ? 0 : SlideIndex + 1;
//     DealsImages[SlideIndex].classList.add('active');
//     DealsImages.style.transform = `translateX(-${SlideCount * 100}%)`;
    
// }

function GoNext(){
    DealsImages.style.transform = 'translateX(-100%)';
}