$(document).ready(function($){

    $(".dropdown-detail, .dropdown-detail-1").slideUp(0);

    $(".dropdown").hover(function(){

        $(".dropdown-detail").slideToggle(500);
        //console.log($(this));
    });

    $(".dropdown-1").hover(function(){

        $(".dropdown-detail-1").slideToggle(500);
        //console.log($(this));
    });



    //console.log($(".dropdown .dropdown-detail"));
});


//Homepage slider
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        //when window width >=768px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

//Introduction slider
const swiperIntro = new Swiper('.introSwiper', {
    slidesPerView: 1,
    speed: 300,
    spaceBetween: 30,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        //when window width is higher 768px
        768: {
            slidesPerView: 5, 
            spaceBetween: 20
        },
    }
});

//Button on product in ingredients page
const contentMain = document.querySelector(".ls-content-main");
const btns = document.querySelectorAll(".ls-btn-holder");
const mainItems = document.querySelectorAll(".ls-main-item");

console.log(contentMain);
console.log(btns);

contentMain.addEventListener("click", function(e) {

    //console.log(e.target);
    let id = e.target.dataset.id;
    //console.log(id);
    if(id) {

        btns.forEach(function(btn) {
            btn.classList.remove("btn-active");
            e.target.classList.add("btn-active");
        });
    
        mainItems.forEach(function(mainItem) {
            mainItem.classList.remove("main-item-active");
            e.target.classList.add("main-item-active");
        })

        let element = document.getElementById(id);
        element.classList.add("main-item-active");
    }
});

//Button on drug in ingredients page
const contentMain2 = document.querySelector(".ls-content-main-1");
const btnsNew = document.querySelectorAll(".ls-btn-holder");
const mainItemsNew = document.querySelectorAll(".ls-main-item");

contentMain2.addEventListener("click", function(e) {

    let id = e.target.dataset.id;
    
    if(id) {

        btnsNew.forEach(function(btn) {
            btn.classList.remove("btn-active");
            e.target.classList.add("btn-active");
        });
    
        mainItemsNew.forEach(function(mainItem) {
            mainItem.classList.remove("main-item-active");
            e.target.classList.add("main-item-active");
        })

        let element = document.getElementById(id);
        element.classList.add("main-item-active");
    }
});

//
//

var slideIndex = 1;
//console.log(slideIndex);



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("ls-mySlides");
    console.log(slides);
}


