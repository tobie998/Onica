var slideIndex = 1;
showSlides(slideIndex);

 
function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlides(n) {
    showSlides(slideIndex = n);
};


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("ls-mySlides");
    var dots = document.getElementsByClassName("ls-thumbnail-item");
    if(n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" ls-thumbnail-item-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " ls-thumbnail-item-active";
};

/*
const btnNext = document.getElementById("btnNext");
//console.log(btnNext);
btnNext.addEventListener("click", plusSlides(1));

const btnPrev = document.getElementById("btnPrev");
btnPrev.addEventListener("click", plusSlides(-1));
*/