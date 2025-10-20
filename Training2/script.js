gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// var tl = gsap.timeline({
//     defaults:{
//         repeat:-1,
//         // repeatDelay:1,
//         yoyo:true,
//     }})
// tl.to('.box',{
// x:250,  
// duration:2,
// delay:1,
// rotation:360,
// ease:'elastic',
//         })
// tl.from('.box1',{
// x:250,  
// duration:2,
// delay:1,
// rotation:360,
// ease:'bounce.in',
//         })
// tl.fromTo('.box2',
//     {x:0,rotation:0,borderRadius:'0%'},
//     {
// x:250,  
// repeat: -1,
// duration:2,
// delay:1,
// yoyo:true,
// // rotation:360,
// ease:'bounce.out', 
// borderRadius:100,
//         })

// function Play(){
// //    var pause =  document.getElementById("red");
//    tl.play();  
//  }
// function Pause(){
// //    var pause =  document.getElementById("red");
//    tl.pause();  
//  }
// function Restart(){
// //    var pause =  document.getElementById("red");
//    tl.restart();  
//  }

//  gsap.to('.swagger-box',{
//   y:250,
//   rotation:360,
//   borderRadius:100,
//   // borderRadius:0,
//   repeat:-1,
//   yoyo:true,
//   stagger:{
//     amount:1.5,
//     grid:[2,1],
//     axis:'y',
//     ease:'circ.inOut',
//     from:'right'
//   }
//  })
// gsap.to('.scro-box',{
//   scrollTrigger:{
// trigger:'.scro-box',
// toggleActions:"restart pause reverse pause",
// // markers:true,
// // start:"20px 80%"
//   },
// x:400,
// duration:3,
// rotation:360,
// // repeat:-1,
// })

// gsap.utils.toArray('.boxes').forEach((box)=>{
//   gsap.to(box,{
// x:150,
// borderRadius:100,
// rotation:360,
// ease:'bounce',
// // scale:1.5,
// // duration:1,
// // delay:1.5,
// // yoyo:true,
// // repeat:-1,
// scrollTrigger:{
//   trigger:box, 
//   start:'bottom, bottom',
//   end: 'top 20%',
//   scrub:true,
// }
//   })
// })

gsap.to('#text',{
  ease:'bounce',
  y:0,
  opacity:1,
  duration:1,
  delay:1,
})
gsap.fromTo('.text',
  {opacity:0,
    y:20,
  },
  {opacity:1,
    duration:1,
    delay:1,
    y:0,
    stagger:1,
    // ease:AudioBufferSourceNode,
    
  })