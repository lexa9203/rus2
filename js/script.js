//SLIDER
const slider = document.querySelectorAll('.slider');
const nextSlider = document.querySelectorAll('.slider__next');
let index = 1;

function showSlider(i) {
    if (i > slider.length) {
        index = 1;
    }
    if (i < 1) {
        index = slider.length;
    }
    slider.forEach((el) => el.classList.add('hide'));
    slider[index - 1].classList.add('show');
}

function plusSlides(n) {
    showSlider(index += n);
}

showSlider(index);

nextSlider.forEach((el) => {
    el.addEventListener('click', function () {
        slider[index - 1].classList.remove('show');
        plusSlides(1);
    })
});

/* SLIDER REVIEWS */
const reviewsSlider = document.querySelectorAll('.reviews__card');
const nextBtn = document.querySelector('.next__btn');
const prevBtn = document.querySelector('.prev__btn');
let index_one = 0;
let index_two = 1;
let index_three = 2;

if (window.innerWidth < 800) {
    small();
}
if ((window.innerWidth >= 800) && (window.innerWidth < 1024)) {
    center();
}
if (window.innerWidth >= 1024) {
    big();
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 800) {
        small();
    }
    if ((window.innerWidth >= 800) && (window.innerWidth < 1024)) {
        center();
    }
    if (window.innerWidth >= 1024) {
        big();
    }
});

function resetSlider() {
    reviewsSlider.forEach((el) => {
        el.style.display = 'none';
    });
}
function small() {

    resetSlider();
    if (window.innerWidth < 800) {
        reviewsSlider[index_one].style.display = 'block';

        nextBtn.addEventListener('click', () => {
            resetSlider();
            index_one += 1;
            if (index_one > reviewsSlider.length - 1) {
                index_one = 0;
            }
            reviewsSlider[index_one].style.display = 'block';
        })

        prevBtn.addEventListener('click', () => {
            resetSlider();
            index_one -= 1;
            if (index_one < 0) {
                index_one = reviewsSlider.length - 1;
            }
            reviewsSlider[index_one].style.display = 'block';
        })
    }
}

function center() {

    resetSlider();
    if ((window.innerWidth >= 800) && (window.innerWidth < 1024)) {
        reviewsSlider[index_one].style.display = 'block';
        reviewsSlider[index_two].style.display = 'block';

        nextBtn.addEventListener('click', () => {
            resetSlider();
            index_one += 1;
            index_two += 1;
            if (index_one > reviewsSlider.length - 1) {
                index_one = 0;
            }
            if (index_two > reviewsSlider.length - 1) {
                index_two = 0;
            }
            reviewsSlider[index_one].style.display = 'block';
            reviewsSlider[index_two].style.display = 'block';
        })

        prevBtn.addEventListener('click', () => {
            resetSlider();
            index_one -= 1;
            index_two -= 1;
            if (index_one < 0) {
                index_one = reviewsSlider.length - 1;
            }
            if (index_two < 0) {
                index_two = reviewsSlider.length - 1;
            }
            reviewsSlider[index_one].style.display = 'block';
            reviewsSlider[index_two].style.display = 'block';
        })

    }
}
function big() {
    resetSlider();
    if (window.innerWidth >= 1024) {
        reviewsSlider[index_one].style.display = 'block';
        reviewsSlider[index_two].style.display = 'block';
        reviewsSlider[index_three].style.display = 'block';

        nextBtn.addEventListener('click', () => {
            resetSlider();
            index_one += 1;
            index_two += 1;
            index_three += 1;
            if (index_one > reviewsSlider.length - 1) {
                index_one = 0;
            }
            if (index_two > reviewsSlider.length - 1) {
                index_two = 0;
            }
            if (index_three > reviewsSlider.length - 1) {
                index_three = 0;
            }
            reviewsSlider[index_one].style.display = 'block';
            reviewsSlider[index_two].style.display = 'block';
            reviewsSlider[index_three].style.display = 'block';
        })

        prevBtn.addEventListener('click', () => {
            resetSlider();
            index_one -= 1;
            index_two -= 1;
            index_three -= 1;
            if (index_one < 0) {
                index_one = reviewsSlider.length - 1;
            }
            if (index_two < 0) {
                index_two = reviewsSlider.length - 1;
            }
            if (index_three < 0) {
                index_three = reviewsSlider.length - 1;
            }
            reviewsSlider[index_one].style.display = 'block';
            reviewsSlider[index_two].style.display = 'block';
            reviewsSlider[index_three].style.display = 'block';
        })
    }
}

/* SCROLL */

const btnProcedure = document.querySelector('.btn__procedure');
const procedure = document.querySelector('.procedure');

const btnStage = document.querySelector('.btn__stage');
const stage = document.querySelector('.stage');

const btnPrice = document.querySelector('.btn__price');
const price = document.querySelector('.price');

const btnReviews = document.querySelector('.btn__reviews');
const reviews = document.querySelector('.reviews');

const btnContacts = document.querySelector('.btn__contacts');
const contacts = document.querySelector('.contacts');

function handleButtonClick(el) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
}

btnProcedure.addEventListener('click', () => {
    handleButtonClick(procedure);
});
btnStage.addEventListener('click', () => {
    handleButtonClick(stage);
});
btnPrice.addEventListener('click', () => {
    handleButtonClick(price);
});
btnReviews.addEventListener('click', () => {
    handleButtonClick(reviews);
});
btnContacts.addEventListener('click', () => {
    handleButtonClick(contacts);
});

/* MAP */


function init() {
    let map = new ymaps.Map('map-test', {
        center: [60.005347, 30.290092],
        zoom: 17
    });

    let placemark = new ymaps.Placemark([60.005347, 30.290092], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [160, 60],
        iconImageOffset: [-19, -74]
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
}

ymaps.ready(init);

/* BURGER  */

const navOpen = document.querySelector('.nav__burger');
const menu = document.querySelector('.header__nav');

navOpen.addEventListener('click', () => {
    menu.classList.toggle('open');
});


