

const initSlider = () => {

  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");


  //slide images according to the slide button clicks
  slideButtons.forEach(button => {

    button.addEventListener("click", ()=> {

      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWdith * direction
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

  })

}

window.addEventListener("load", initSlider)