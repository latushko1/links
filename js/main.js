setTimeout(()=>{
    const main = document.querySelector('body');
    main.style.opacity = 1 
    main.style.filter = ('blur(0px)') 
}, 1000)

const vanta = document.querySelector('#vanta')

VANTA.BIRDS({
    el: vanta,
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xff7800,
    color2: 0xb64a00,
    birdSize: 1.70,
    wingSpan: 14.00,
    speedLimit: 2.00,
    separation: 80.00,
    alignment: 5.00,
    cohesion: 11.00,
    quantity: 3.00,
    backgroundAlpha:0.0,
})