
const menuIcon = document.getElementById('menu-icon');
const mobileDiv = document.getElementById('mobil-menu-bar');

function openMenuBar() {
    mobileDiv.classList.add('open');
}

function closeMenuBar() {
    mobileDiv.classList.remove('open');
}



/* First slider section start */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      autoplay: false,
      autoplayTimeout: 1000,
      stagePadding: 50,
      dots: true, 
      responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 2 
        },
        1000: {
          items: 5 
        },
        1400: {
          items: 6 
      }
    }});
  });
/* First slider section end */
  
// <!-- OUR CLIENTS SECTION START -->

$(".services").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});

// <!-- OUR CLIENTS SECTION END -->

// <!-- TESTIMONIAL SECTION START -->
let currentSlide = 0;
const slides = document.querySelectorAll(".slider");
const slideIntervalTime = 5000; 
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function moveSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    showSlide(currentSlide);
}

function autoSlide() {
    setInterval(() => {
        moveSlide(1); 
    }, slideIntervalTime);
}

showSlide(currentSlide);

autoSlide();

window.addEventListener("load", function () {
  let preloader = document.getElementById("preloader");
  let content = document.getElementById("content");

  preloader.style.opacity = "0"; // Fade out effect
  setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block"; // Show content after preloader disappears
  }, 500); // Wait for fade-out effect
});

try {
  setTimeout(function () {
    $(".popup_wrapper").css("opacity", "1");
  }, 2e3),
  $(".popup_wrapper"),
  $(".popup_close").on("click", function () {
    $(".popup_wrapper").fadeOut(300),
      $.cookie("cookie_popup", "monster", { expires: 7, path: "/" });
  }),
  void 0 === $.cookie("cookie_popup")
    ? $(".popup_wrapper").removeClass("cookie_popup")
    : $(".popup_wrapper").addClass("cookie_popup");
} catch (error) {
  
}


// <!-- TESTIMONIAL SECTION END -->

