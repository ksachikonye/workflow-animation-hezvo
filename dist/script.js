gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
let smoother = ScrollSmoother.create(
{
  smoot:2,
  smootTouch: 0.1
})
var tl = gsap.timeline({repeat: -1})

tl.to(".bubble-pulse",{
  duration: 0.5,
  scale: 0.9,
  opacity: 1
})
.to(".bubble-pulse",{
  duration: 1.1,
  scale: 2,
  opacity: 0
})

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play reverse play reverse"
});

gsap.to("#primo", {
  scrollTrigger:{
    trigger: "#secondo",
    start: "bottom 80%",
    end: "top 40%"
  }, 
  duration: 2,
  visibility:"visible",
  text: "My personal experience"
});
gsap.to("#secondo", {
  scrollTrigger:{
    trigger: "#secondo",
    start: "bottom 80%",
    end: "top 40%",
    id: "secondo",
    //scrub: 2,
    markers: true
  }, 
  duration: 2,
  visibility:"visible",
  text: ".CurriculumVitae('*')"
});

gsap.to("#terzo", {
  scrollTrigger:{
    trigger: "#secondo",
    start: "bottom 80%",
    end: "top 40%"
  }, 
  duration: 2,
  visibility:"visible",
  text: "Little spoiler, it's not that long"
});
// Animazione cursore
// gsap.to('.cursor', 
//   {
//   opacity: 1, 
//   yoyo: true,
//   ease: "power2.inOut", 
//   repeat: -1})