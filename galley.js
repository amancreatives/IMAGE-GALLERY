let scrollContainer = document.querySelector(".photos");
let backButton = document.querySelector("#backBtn");
let nextButton = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY ;
    scrollContainer.style.scrollBehaviour = "auto";
});

nextButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});

backButton.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});