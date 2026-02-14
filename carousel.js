const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

function next(){
    let newIndex = currentIndex + 1;
    if(newIndex >= slides.length){
        newIndex = 0;
    }
    showSlide(newIndex);
}

function prev(){
    let newIndex = currentIndex - 1;
    if(newIndex < 0){
        newIndex = slides.length - 1;
    }
    showSlide(newIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});
