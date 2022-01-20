$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 7,
    },
    768: {
      items: 7,
    },
    1000: {
      items: 7,
    },
  },
});

//  Slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  //dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }
  dots[slideIndex].className += " dot-active";
  setTimeout(showSlides, 3000);
}

// Filter product
// const filterDropdown = document.getElementById("filter-dropdown");
// const filterSelect = document.querySelector(".filter-select");
// filterDropdown.addEventListener("click", function () {
//   filterSelect.classList.toggle("active");
// });

// Pagniation
const pagniation = document.querySelectorAll("#pagniation");
pagniation.forEach((element) => {
  element.addEventListener("click", function () {
    const pagniationActive = document.querySelector(".pagniation-active");
    pagniationActive.classList.remove("pagniation-active");

    this.classList.add("pagniation-active");
  });
});

// // Product-detail review
// const tabs = document.querySelectorAll(".product__detail__tab__item");
// const panes = document.querySelectorAll(".product__detail__tab__pane");
// const line = document.querySelector(".product__detail__tab__line");
// const tabActive = document.querySelector(".tab__item--active");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

// tabs.forEach((item, index) => {
//   const pane = panes[index];
//   item.addEventListener("click", function (e) {
//     const currentTab = document.querySelector(" .tab__item--active");
//     const currentPane = document.querySelector(" .tab__pane--active");
//     currentTab.classList.remove("tab__item--active");
//     currentPane.classList.remove("tab__pane--active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("tab__item--active");
//     pane.classList.add("tab__pane--active");
//   });
// });
