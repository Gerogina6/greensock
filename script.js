// gsap.set('.box', {y: 300, opacity: 0});
// gsap.to('.box', {
//     duration: 2, 
//     // delay: 2, 
//     x: 200, 
//     // rotation: 360, 
//     // opacity: 1,
//     // yoyo: true,
//     repeat: -1,
//     ease: 'power1.out',
// });

// const obj = {num: 0};
// gsap.to(obj, {duration:2, num: 100, onUpdate: () => {console.log(obj.num);}})

// timeline
let tl = gsap.timeline({default:{ duration: 1}, repeat: -1, repeatDelay: 1, yoyo: true});
tl.to('.green', { x: 600, duration: 2}, 1);
tl.to('.purple', { x:600, scale: 0.2}, "<")
tl.to('.orange', { x:600, scale: 2, y: 20}, "+=1")
tl.to('.blue', { rotation: 360 })

// to
let tween = gsap.to('.blue1', { duration: 1, x: 100})
tween.resume();
tween.seek(0.5);