var tl = gsap.timeline({
    defaults:{
        repeat:-1,
    }
})
// tl.to('.box1',{
//     duration:2,
//     scale:0,
//     opacity:0,
//     delay:1,
// }).to('.box2',{
//     duration:2,
//     x:-200,

// }).to('.box3',{
//     duration:2,
//     x:-200,
//         borderRadius:0,
//     rotate:360,
// }).set('.box1',{
//     duration:3,
//     scale:0,
//     opacity:1,
//     delay:1,

// })

var tl = gsap.timeline({
    defaults:{
        duration:1,
        // repeat:-1,
        // yoyo:true,
    }
})
tl.to('.box1',{
    // duration:2,
    scale:0,
    opacity:0,
    delay:1,
}).to('.box2',{
    // duration:2,
    x:-200,
    scale:2,


}).to('.box3',{
    // duration:2,
    x:-205,
        borderRadius:0,
    rotate:360,
}).to('.box1',{
    scale:2,
    opacity:1,
    duration:2,
})
// tl.set('.box1',{
//     y:-200,
//     scale:1,
//     duration:2,
//     delay:1,
//     opacity:0,
//     ease:'linear',
// })
// tl.to('.box1',{
// y:200,
// scale:1,
// duration:2,
// delay:1,
// opacity:1,
// ease:'linear',
// })
// gsap.from('.box1', {
//     y: -200,
//     duration:2,
//     ease:'linear',
//     repeat:-1,
//     yoyo:true
// });
