//Animation
gsap.registerPlugin(ScrollTrigger);

//=== Index-Slides Common Animation ===// 
gsap.fromTo('#index-slide1 img.bird, #index-slide4 img.transfer-bird', { 
    x: 0
},{
    x: 18, duration: .6,
    repeat: -1, delay: 3,
    yoyo: true, ease: Power2.easeInOut,
})
gsap.from('#index-slide4 img.left-cloud, #index-slide4 img.right-cloud', { 
    duration: .6, scale: 1.1,
    repeat: -1, yoyo: true, ease: Power2.easeInOut,
})
gsap.fromTo('footer button.to-top', { 
    y: 0
},{
    y: -12, duration: .725, repeat: -1, 
    yoyo: true, ease: Power2.easeInOut,
})

//=== Index-Slides1 ===//
gsap.fromTo('#index-slide1 img.title', { 
    y: -200, opacity: 0,
},{
    y: 0, opacity: 1, 
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('#index-slide1 img.bird', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "bounce.out",
})
gsap.fromTo('#index-slide1 .points-container .points', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, 
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide1 .points-container .points',
    }
})

//=== Index-Slides2 ===//
gsap.fromTo('#index-slide2 article .advise-container', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide2 article .advise-container',
    }
})
gsap.fromTo('#index-slide2 .carousel', { 
    y: 50, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide2 .otp-methods .otp-birds img:last-child',
    }
})

//=== Index-Slides3 ===//
gsap.fromTo('#index-slide3 img.left-bird', { 
    x: -150, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide3',
        start: 'top 80%'
    }
})
gsap.fromTo('#index-slide3 img.right-bird', { 
    x: 150, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide3',
        start: 'top 80%'
    }
})
gsap.fromTo('#index-slide3 .advantages-container .advantages', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide3 .advantages-container',
        start: 'top 70%'
    }
})
gsap.fromTo('#index-slide3 article button', { 
    y: 70, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide3 .advantages-container',
        start: 'top 70%'
    }
})

//=== Index-Slides4 ===//
gsap.fromTo('#index-slide4 img.transfer-bird', { 
    x: 200, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide4',
        start: 'top 50%'
    }
})

//=== Index-Slides5 ===//
gsap.fromTo('#index-slide5 img.payments-bird',{ 
    x: -200, opacity: 0
}, {
    x: 0, opacity: 1,
    duration: 1, ease: "bounce.out",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})
gsap.fromTo('#index-slide5 .payment-methods', { 
    y: 200, opacity: 0
}, {
    y: 0, opacity: 1, delay: .5,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})
gsap.fromTo('#index-slide5 .payment-methods button', { 
    y: 20, opacity: 0
}, {
    y: 0, opacity: 1, delay: 1,
    duration: 1, ease: "sine.inOut",
    scrollTrigger:{
        trigger: '#index-slide5 .payment-methods',
        start: 'top 90%'
    }
})