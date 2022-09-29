function slidesPlugin(randomActiveSlide){

    const slides = document.querySelectorAll('.slide');
    const randomActiveSlide = Math.floor(Math.random() * slides.length);
    slides[randomActiveSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses () {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        }) 
    }
}

slidesPlugin(random, slides[random]);