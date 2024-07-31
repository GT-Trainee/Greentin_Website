window.addEventListener('load', function () {
    document.querySelector('.pre-loader').className += ' hidden';
});

document.addEventListener('DOMContentLoaded', function () {
    const marquees = document.querySelectorAll('.marquee_banner');
  
    marquees.forEach(marquee => {
      marquee.addEventListener('mouseover', () => {
        marquee.style.animationPlayState = 'paused';
      });
  
      marquee.addEventListener('mouseout', () => {
        marquee.style.animationPlayState = 'running';
      });
  
      // marquee.addEventListener('click', function (event) {
      //     const targetImage = event.target;
      //     if (targetImage.tagName === 'IMG') {
      //         window.location.href = targetImage.src;
      //     }
      // });
    });
  });

  
//   script for product animation
AOS.init({
    duration: 1000, // Duration of animations
    easing: 'ease-out', // Easing function
    once: true // Only animate once
  });


//   script for scoll background
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Change 50 to whatever scroll position you want
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

