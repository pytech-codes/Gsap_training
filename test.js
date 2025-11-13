import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.timeline(
    {
    scrollTrigger:{
        trigger:'section',
        start:'top top',
        end:'bottom bottom',
        scrub:true,
        pin:true,
    },
   
    }).to('div',{
width:'50rem',
height:'50rem'
    })
