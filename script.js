// gsap.registerPlugin(CustomEase, CustomWiggle);
// var wiggles = 10

const buttonOne = document.querySelector('.thebutton')


const timeline = gsap.timeline({
    paused: true,
    reversed: true,
    default: {
        ease: 'power2.inOut',
        duration: 1,
    }
})
const timelineTwo = gsap.timeline({
    paused: true,
    reversed: true,
    default: {
        ease: 'power2.inOut',
        duration: 1,
    }
})

timelineTwo.to(".smiley", {
    duration: 4, 
    x: "100%", 
    rotation: 720, 
    ease: "none", 
    paused: true
  });

timeline
.fromTo('.smiley .face', {opacity: 0}, {top: '0', opacity: 1})
.from('.smiley .eyes-one', {top:'-50vw', opacity: 0, duration: 2.5, ease: "bounce.out"}, '-=0.5')
.from('.smiley .eyes-two', {top:'-50vw', opacity: 0, duration: 2.5, ease: "bounce.out"}, '-=2.5')
.from('.smiley .mouth', {bottom:'-50vw', opacity: 0,duration: 2.5, ease: "bounce.out"}, '-=2.5')




var tween = gsap.to(".smiley", {
  duration: 4, 
  x: 750, 
  rotation: 360, 
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

// document.querySelector("#play").onclick = () => timelineTwo.play();
// document.querySelector("#pause").onclick = () => timelineTwo.pause();
// document.querySelector("#resume").onclick = () => timelineTwo.resume();
// document.querySelector("#reverse").onclick = () => timelineTwo.reverse();
// document.querySelector("#restart").onclick = () => timelineTwo.restart();





buttonOne.addEventListener('click', ()=> {
    toggletimelineTwo(timeline)
})

function toggletimelineTwo(timelineTwo){
    timelineTwo.reversed() ? timelineTwo.play() : timelineTwo.reverse()
}