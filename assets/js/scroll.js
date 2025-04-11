let scrollY = 0;
const body = document.querySelector('body');
const horizontalScroll = document.querySelector('.horizontal-scroll');

document.addEventListener('wheel', event => {

    // Adjust scrollY based on the wheel delta
    // You might want to include some scaling factor or limit the maximum scroll value
    scrollY += event.deltaY;

  
    const maxScroll = horizontalScroll.scrollWidth - window.innerWidth; 
    scrollY = Math.max(0, Math.min(scrollY, maxScroll));
    console.log(scrollY);
    scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    // console.log(`translateX(-${scrollY}px)`);
    horizontalScroll.style.transform = `translateX(-${scrollY}px)`;
}, { passive: false }); // Use passive: false so you can call preventDefault




  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */

function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
