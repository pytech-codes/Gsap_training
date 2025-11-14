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
    // y:-100,
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
  yPercent:600,
  duration:3,
  ease:'bounce',
  stagger:0.06,
  scrub:true

})
gsap.from(paraSplit.lines,{
  opacity:0,
  yPercent:100,
  duration:1.8,
  ease:'bounce',
  stagger:0.06,
  delay:1
})
gsap.set('#popular-table',{
x:-600
})
gsap.set('.sub',{
x:-600
})
gsap.set('.cock',{
x:600
})

gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top top',
        end:'bottom top',
        scrub:true,}
    })
.to('.right-leaf',
        {y:600,
            ease:'linear',
            duration:2
        },0)
.to('.left-leaf', {
    y:750,
    ease:'linear',
    duration:2
},0)
.to('.title',{
duration:2,

    y:80
},0)
.to('.spirit',{
duration:2,

    y:50,
},0)
.to('#popular-table',{
duration:2,

x:0
},0)
.to('.sub',{
duration:2,

x:0
},0)
.to('.cock',{
duration:2,
x:-0
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
    pin: true,
    yoyo:true
  }
});

videoRef.onloadedmetadata = () => {
  tl.to(videoRef, {
    currentTime: videoRef.duration, // scrub through entire video duration
    ease: "none"
  });
};

const titleSplit = SplitText.create('#about h2',{
  type:'words'
});
const scrollTime = gsap.timeline({
  scrollTrigger:{
    trigger:'#about',
    start:'top center',
  }
}).from(titleSplit.words,{
  opacity: 0, duration:1, yPercent:100, ease:'expo out', stagger:0.02,
}).from('.top-grid div, .bottom-grid div',{
  opacity:0, duration:1, ease:'power1.inOut', stagger:0.06, yoyo:true,
}, '-=0.5');

// const isMobile = useMediaQuery({maxWidth:767}); 
// const start = isMobile ? 'top 20%' : '';

const maskTime = gsap.timeline({
  scrollTrigger:{
    trigger:'#art',
    start: 'top top',
    end:'bottom center',
    scrub:1.5,
    pin:true,
  }
});
  maskTime.to('.wll-fade',{
  opacity:0, stagger:0.2, ease:'power1.inOut',
}).to('.masked-img', {
  scale:1.3, maskPosition:'center', maskSize:'400%',
  duration:2, ease:'power1.inOut',
}).to('#masked-content',{
  opacity:1,
  yPercent:10,
  duration:1,
  ease:'power1.inOut'
  
})