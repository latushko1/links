const fadeOut = () =>{
    const loaderWrapper = document.querySelector('.wrapper')
    loaderWrapper.classList.add('fade')
}
window.addEventListener('load', fadeOut)
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
    color1: 0xed0cdf,
    color2: 0xffff,
    birdSize: 1.70,
    wingSpan: 14.00,
    speedLimit: 2.00,
    separation: 80.00,
    alignment: 5.00,
    cohesion: 11.00,
    quantity: 2.00,
    backgroundAlpha:0.0,
})
