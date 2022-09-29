///function slidesPlugin(){

    //const slides = document.querySelectorAll('.slide');
    //const randomActiveSlide = Math.floor(Math.random() * slides.length);
    //slides[randomActiveSlide].classList.add('active');

    //for (const slide of slides) {
   //     slide.addEventListener('click', () => {
     //       clearActiveClasses()
      //      slide.classList.add('active')
   //     })
   // }

  //  function clearActiveClasses () {
       // slides.forEach((slide) => {
        //    slide.classList.remove('active')
       // }) 
  ////  }
//}

//slidesPlugin(random, slides[random]);

function slidesPlugin(ranSlide){
const slides = document.querySelectorAll('.slide'); //находим слайды
const ranSlide = Math.floor(Math.random() * slides.length); //получаем случайный слайд
ranSlide.classList.add('active'); //активируем случайный слайд
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
 slidesPlugin();