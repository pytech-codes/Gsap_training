import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// gsap.to('.box', {
//     x:400,
//     rotate:360,
//     duration:2,
// })
gsap.registerPlugin(ScrollTrigger,SplitText);
gsap.set('.title',{
    y:-100,
    // fontSize:300
})
const navTween = gsap.timeline({
    scrollTrigger:{
        trigger: '.nav',
        start: 'bottom top',
        
    }
});
navTween.fromTo('.nav',{
    backgroundColor:'transparent',
},{
    backgroundColor:'#00000050',
    backgroundFilter:'blur(10px)',
    duration:1,
    ease:'power1.inOut'

});
var heroSplit = new SplitText('.title', {type:'chars, words'});
var paraSplit = new SplitText('.spirit', {type:'lines'});

heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
gsap.from(heroSplit.chars,{
  yPercent:100,
  duration:1.2,
  ease:'bounce',
  stagger:0.06
})
gsap.from(paraSplit.lines,{
  opacity:0,
  yPercent:100,
  duration:1.8,
  ease:'bounce',
  stagger:0.06,
  delay:1
})
gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,}
    })
.to('.right-leaf',
        {y:300},0)
.to('.left-leaf', {
    y:-300
},0)
.to('.title',{
    y:80
},0)
.to('.spirit',{
    y:50,
},0)
const videoRef = document.querySelector(".video"); // ✅ Select your video by class
gsap.set('video',{
    // y:-500
})
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".video",  // ✅ match your video class
    start: "center 50%",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});

// ✅ Wait for the video metadata to load before animating
videoRef.onloadedmetadata = () => {
  tl.to(videoRef, {
    currentTime: videoRef.duration, // scrub through entire video duration
    ease: "none"
  });
};