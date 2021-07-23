//Add color for question when clicking on.
const newAccordion = document.querySelector(".accordion");
const cardLinks = document.querySelectorAll(".card-link");
console.log(newAccordion);
console.log(cardLinks);

newAccordion.addEventListener("click", function(e) {

    cardLinks.forEach(function(cardLink) {
        cardLink.classList.remove("card-link-active");
        e.target.classList.add("card-link-active");
    });   
});

