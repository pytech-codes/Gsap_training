// const sidebar = document.querySelector(".sidebar")
// const btn = document.querySelector("button") 
// btn.addEventListener('click',()=>{
//     sidebar.classList.toggle('hide');
// })
// gsap.method(Element, vars obj)

// gsap.to('.box', {
//     x:100,
//     duration:2,
//     repeat:-1,
// })
// gsap.set(".box",{
//     opacity:0,
//     background:'yellow',

// });
// gsap.to('.box', {
//     opacity:1,
//     duration:3,
//     background: 'white',
//     repeat:-1,
//     yoyo: true,
//     x:100,
// })
// gsap.from('.box1', {
//     y: -200,
//     duration:2,
//     ease:'linear',
//     repeat:-1,
//     yoyo:true
// });
// gsap.from('.box2', {
//     y: -200,
//     duration:1.8,
//     ease:'linear',
//     repeat:-1,
//     yoyo:true
// })
// gsap.from('.box3', {
//     y: -200,
//     duration:1.6,
//     ease:'linear',
//     repeat:-1,
//     yoyo:true
// })
// gsap.fromTo('.box2', {
//     y:200,
//     opacity:0},
//     {
//         opacity:1,
//         y:-200,
//         duration:3,
//         ease:'linear',
//         borderRadius:0,
//         repeat:-1, 
//         yoyo:true,
//         backgroundColor:'red',
//     } 
// )

// gsap.set('.box',{
//     borderRadius:100,
// })

gsap.to('.box',{
    borderRadius:100,
    duration:1,
    y:-100,
    ease:'power1',
    yoyo:true,
    repeat:-1,
    duration:1,
    stagger:{
        amount:4,
        each:0.5,
        from:100,


    }
})
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let restart = document.querySelector('.restart')
let tween = gsap.to('.box1',{
    y:-200,
    duration:5,
    backgroundColor:'teal',
    repeat:-1,
    yoyo: true,
});
play.addEventListener('click', ()=>tween.play());
pause.addEventListener('click', ()=>tween.pause());
restart .addEventListener('click', ()=>tween.restart ());