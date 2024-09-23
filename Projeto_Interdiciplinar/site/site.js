// const ads = [
//     '',
//     'D:\Page 1 - Untitled - Opera 19_02_2024 15_29_11.png',
//     'D:\Page 1 - Untitled - Opera 19_02_2024 15_29_03.png' 
// ];

// let currentAdIndex = 0;

// function showAd(index) {
//     const adImage = document.getElementById('adImage');
//     adImage.src = ads[index];
// }

// function nextAd() {
//     currentAdIndex = (currentAdIndex + 1) % ads.length;
//     showAd(currentAdIndex);
// }

// function prevAd() {
//     currentAdIndex = (currentAdIndex - 1 + ads.length) % ads.length;
//     showAd(currentAdIndex);
// }



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    showSlide(currentSlide + 1);
}

setInterval(autoSlide, 4000); 