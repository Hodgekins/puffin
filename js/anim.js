gsap.registerPlugin(ScrollTrigger);

//Fade in (upwards) on scroll
(function() {

  const items = gsap.utils.toArray(".anim-fade-up");

  items.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      y: 20
    });
    gsap.to(item, {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",
      }
    })
  });
})();

//Highlight on hover
(function() {
  
  const elements = document.querySelectorAll('.anim-highlight');

  elements.forEach((el) => {
    el.addEventListener("mouseover", () => {
      gsap.to(el, {
        duration: 1,
        scale: 1.04,
      });    
    });
    el.addEventListener("mouseout", () => {
      TweenLite.to(el, 1, {
        scale: 1,
      });    
    });
  }); 
})();


