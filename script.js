// gsap.set('.box', {y: 300, opacity: 0});
gsap.to('.box', {
    duration: 2, 
    // delay: 2, 
    x: 200, 
    // rotation: 360, 
    // opacity: 1,
    // yoyo: true,
    repeat: -1,
    ease: 'power1.out',
});

// const obj = {num: 0};
// gsap.to(obj, {duration:2, num: 100, onUpdate: () => {console.log(obj.num);}})