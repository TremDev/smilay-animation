const timeline = gsap.timeline({
    default: {
        ease: 'power2.inOut',
        duration: 1,
    }
})

timeline
.from('.circle', {left:'-50vw'})
.from('.eyes-one', {left:'-50vw'})
.from('.eyes-two', {left:'-50vw'})
.from('.mouth', {left:'-50vw'})
