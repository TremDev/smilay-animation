const button = document.querySelector('button')


const timeline = gsap.timeline({
    paused: true,
    default: {
        ease: 'power2.inOut',
        duration: 1,
    }
})

timeline
.fromTo('.smiley .face', {top:'-50vw', opacity: 0}, {top: '0', opacity: 1})
.from('.smiley .eyes-one', {left:'-50vw', opacity: 0}, '-=0.5')
.from('.smiley .eyes-two', {right:'-50vw', opacity: 0}, '-=0.5')
.from('.smiley .mouth', {bottom:'-50vw', opacity: 0}, '-=0.5')

button.addEventListener('click', ()=> {
    toggleTween(timeline)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
}