let choosenEyes 
let choosenMouth 

let svgContent = document.querySelector('.swiper-face svg')

const handSvg = "<svg width='1824' height='2840' viewBox='0 0 1824 2840' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1733.61 295.566C1732.29 295.074 1268.85 133.937 1110.24 72.4351C1046.8 47.8341 0 -358.082 0 1056.47C0 1095.65 105.737 1733 211.474 1733H793.029C1235.8 1733 1091.31 1076.15 1634.7 988.452C1726.64 973.63 1773.27 920.061 1765.07 830.637C1756.35 735.369 1660.66 704.003 1578.23 704.003C1517.65 704.003 1274.03 718.333 1101.04 823.994C1085.92 712.737 1057.37 577.185 1057.37 441.388C1321.71 502.89 1643.79 584.873 1649.98 587.272C1719.23 613.964 1794.1 570.605 1817.15 489.975C1840.3 409.468 1802.87 322.442 1733.61 295.566V295.566Z' fill='#FFDC5D'/><path d='M988.991 213.077C968.417 189.015 934.885 188.954 914.206 213.016C893.526 237.016 893.473 275.97 914.153 300.094C915.052 301.14 1004.28 406.988 1004.28 564.282V1001.76C1004.28 1054.2 977.778 1072.78 952.973 1072.78C926.74 1072.78 898.762 1052.35 898.762 994.996V871.917C898.762 640.098 882.737 393.757 763.737 324.525C737.557 309.325 705.824 321.694 692.761 352.033C679.697 382.433 690.275 419.418 716.402 434.619C751.309 454.927 792.932 547.297 792.932 871.855V933.149C792.932 933.149 792.72 994.749 792.72 1124.78C792.72 1177.21 766.223 1195.8 741.418 1195.8C715.186 1195.8 687.207 1175.37 687.207 1118.01V994.934C687.207 763.115 671.182 516.774 552.182 447.542C526.003 432.28 494.269 444.711 481.206 475.05C468.142 505.45 478.72 542.436 504.847 557.636C539.754 577.944 581.377 670.314 581.377 994.873V1117.95C581.377 1119.24 581.642 1120.35 581.642 1121.64C581.589 1122.69 581.113 1123.61 581.113 1124.66C581.113 1177.09 554.615 1195.68 529.811 1195.68C503.578 1195.92 475.6 1175.49 475.6 1118.14C475.6 909.271 475.6 649.329 340.575 570.744C314.395 555.482 282.661 567.913 269.598 598.252C256.534 628.652 267.112 665.637 293.239 680.837C369.822 725.392 369.822 971.241 369.822 1118.14C369.822 1250.01 450.319 1319 529.811 1319C567.996 1319 606.235 1302.82 635.535 1271.68C665.153 1302.75 703.286 1319 741.365 1319C806.736 1319 872.159 1271.68 891.887 1181.64C911.35 1190.94 932.135 1195.92 952.92 1195.92C1030.98 1195.92 1110 1129.27 1110 1001.83V564.282C1110 356.587 993.962 218.862 988.991 213.077Z' fill='#EF9645'/><rect x='189' y='1666' width='705' height='2141' fill='#FFDC5D'/></svg>"

const handTwoSvg = "<svg width='1535' height='2747' viewBox='0 0 1535 2747' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M79.6685 212.649C80.775 212.295 468.759 96.3632 601.539 52.1144C654.651 34.4149 1531 -257.627 1531 760.095C1531 788.281 1442.48 1246.83 1353.96 1246.83H867.099C496.421 1246.83 617.384 774.254 162.479 711.156C85.5108 700.492 46.4736 661.951 53.3339 597.613C60.6368 529.072 140.747 506.505 209.749 506.505C260.471 506.505 464.421 516.815 609.24 592.835C621.898 512.788 645.799 415.264 645.799 317.563C424.499 361.812 154.866 420.795 149.688 422.521C91.7073 441.725 29.0351 410.53 9.7377 352.519C-9.6482 294.598 21.6878 231.986 79.6685 212.649V212.649Z' fill='#FFDC5D'/><path d='M703.046 153.301C720.269 135.99 748.341 135.945 765.653 153.257C782.966 170.525 783.01 198.551 765.698 215.907C764.945 216.659 690.25 292.813 690.25 405.981V720.734C690.25 758.456 712.433 771.828 733.198 771.828C755.16 771.828 778.582 757.128 778.582 715.864V627.313C778.582 460.528 791.998 283.294 891.621 233.484C913.538 222.548 940.104 231.447 951.041 253.275C961.977 275.147 953.122 301.757 931.249 312.693C902.026 327.303 867.18 393.761 867.18 627.269V671.367C867.18 671.367 867.357 715.687 867.357 809.24C867.357 846.963 889.54 860.334 910.306 860.334C932.267 860.334 955.69 845.635 955.69 804.37V715.819C955.69 549.034 969.106 371.8 1068.73 321.99C1090.65 311.01 1117.21 319.954 1128.15 341.781C1139.08 363.653 1130.23 390.263 1108.36 401.199C1079.13 415.81 1044.29 482.267 1044.29 715.775V804.326C1044.29 805.256 1044.07 806.052 1044.07 806.982C1044.11 807.735 1044.51 808.399 1044.51 809.152C1044.51 846.874 1066.69 860.245 1087.46 860.245C1109.42 860.423 1132.84 845.723 1132.84 804.459C1132.84 654.188 1132.84 467.169 1245.88 410.63C1267.8 399.649 1294.36 408.593 1305.3 430.421C1316.24 452.293 1307.38 478.902 1285.51 489.838C1221.4 521.893 1221.4 698.773 1221.4 804.459C1221.4 899.341 1154.01 948.973 1087.46 948.973C1055.49 948.973 1023.48 937.329 998.948 914.926C974.153 937.285 942.23 948.973 910.35 948.973C855.624 948.973 800.853 914.925 784.338 850.151C768.044 856.836 750.643 860.423 733.243 860.423C667.89 860.423 601.74 812.472 601.74 720.778V405.981C601.74 256.551 698.884 157.463 703.046 153.301Z' fill='#EF9645'/><rect width='590.206' height='1540.37' transform='matrix(-1 0 0 1 1372.77 1198.63)' fill='#FFDC5D'/></svg>"

const handThreeSvg = "<svg width='1108' height='2284' viewBox='0 0 1108 2284' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M58.7073 176.703C59.5072 176.409 340.014 80.074 436.012 43.305C474.412 28.5974 1108 -214.078 1108 631.609C1108 655.03 1044 1036.07 980.002 1036.07H628.009C360.014 1036.07 447.468 643.375 118.578 590.942C62.9312 582.081 34.7078 550.055 39.6677 496.593C44.9476 439.638 102.866 420.886 152.754 420.886C189.425 420.886 336.878 429.453 441.58 492.622C450.732 426.107 468.012 345.068 468.012 263.882C308.015 300.651 113.074 349.664 109.33 351.098C67.4111 367.056 22.1 341.134 8.14824 292.93C-5.8675 244.799 16.788 192.771 58.7073 176.703V176.703Z' fill='#FFDC5D'/><path d='M509.401 127.387C521.853 113.002 542.148 112.965 554.665 127.351C567.182 141.699 567.214 164.988 554.697 179.41C554.153 180.035 500.149 243.316 500.149 337.354V598.901C500.149 630.247 516.187 641.358 531.2 641.358C547.078 641.358 564.012 629.143 564.012 594.854V521.272C564.012 382.68 573.712 235.406 645.738 194.016C661.584 184.929 680.791 192.324 688.698 210.462C696.604 228.636 690.202 250.748 674.388 259.835C653.261 271.976 628.068 327.199 628.068 521.235V557.879C628.068 557.879 628.196 594.707 628.196 672.447C628.196 703.792 644.233 714.903 659.247 714.903C675.125 714.903 692.059 702.689 692.059 668.399V594.817C692.059 456.226 701.758 308.951 773.784 267.561C789.63 258.437 808.837 265.869 816.744 284.007C824.651 302.182 818.248 324.293 802.435 333.38C781.307 345.521 756.114 400.745 756.114 594.781V668.363C756.114 669.135 755.954 669.798 755.954 670.57C755.986 671.196 756.274 671.748 756.274 672.373C756.274 703.719 772.312 714.83 787.325 714.83C803.203 714.977 820.137 702.762 820.137 668.473C820.137 543.604 820.137 388.199 901.863 341.217C917.709 332.093 936.915 339.524 944.822 357.662C952.729 375.837 946.327 397.949 930.513 407.036C884.16 433.673 884.16 580.653 884.16 668.473C884.16 747.316 835.439 788.559 787.325 788.559C764.213 788.559 741.068 778.883 723.334 760.267C705.408 778.846 682.327 788.559 659.279 788.559C619.713 788.559 580.114 760.267 568.174 706.441C556.394 711.997 543.813 714.977 531.232 714.977C483.983 714.977 436.158 675.132 436.158 598.938V337.354C436.158 213.184 506.391 130.846 509.401 127.387Z' fill='#EF9645'/><rect width='426.711' height='1279.99' transform='matrix(-1 0 0 1 993.605 996.012)' fill='#FFDC5D'/></svg>"

window.addEventListener("load", () => {

    const t2 = gsap.timeline({});
    //   t1.fromTo(".leSmile", { opacity: 0 }, { opacity: 1 });
      t2.from("form", {opacity:0, duration: 3 });
        //     TweenMax.to('form', .2, {
        //         duration: 2,
        //     opacity: 1,
        // })
    choosenMouth = document.querySelector('.swiper-slide-active .mouth svg')
    choosenEyes = document.querySelector('.swiper-slide-active .eyes svg')
});


var formColor = document.querySelector(".choosen-color");
var colors = document.querySelectorAll("input[name=color]");
formColor.addEventListener("change", () => {
  colors.forEach((el) => {
    if (el.checked) {
      console.log(el);
      document.querySelector('.swiper-face svg path').style.fill = el.value;
    }
  });

});

const button = document.querySelector('.button')



var thumbsSwiperOne = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,

  });
var thumbsSwiperTwo = new Swiper(".mySwiperMouthThumbs", {
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,

  });

var sliderOne = new Swiper ('.swiper-container-face', {

    slidesPerView: '3',
    centeredSlides: true,
    mousewheel: true,
    loop: true,

    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiperOne,
      },
})

sliderOne.on('slideChange', function(){


    if(document.querySelector('.swiper-slide-next')){
        console.log('newt mouth',document.querySelector('.swiper-slide-next'))
    }
    TweenMax.to('.reveal', .2, {
        y: '-50px',
    })
    TweenMax.to('.swiper-slide', .2, {
        scale: .95,
    })
})
sliderOne.on('slideChangeTransitionEnd', function(){
    TweenMax.to('.reveal', 0, {
        y: '50px',
    })
    TweenMax.to('.reveal', .2, {
        y: 0,
        delay: .5,
    })
    TweenMax.to('.swiper-slide-active', .2, {
        scale: 1,
        ease: Power4.easeOut,
    })
})
var sliderTwo = new Swiper ('.swiper-container-mouth', {

    slidesPerView: '3',
    centeredSlides: true,
    mousewheel: true,
    loop: true,

    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: thumbsSwiperTwo,
      },
})

sliderTwo.on('slideChange', function(){

    // TweenMax.to('.reveal', .2, {
    //     y: '-50px',
    // })
    TweenMax.to('.swiper-slide', .2, {
        scale: .95,
    })
})
sliderTwo.on('slideChangeTransitionEnd', function(){
    // TweenMax.to('.reveal', 0, {
    //     y: '50px',
    // })
    // TweenMax.to('.reveal', .2, {
    //     y: 0,
    //     delay: .5,
    // })
    TweenMax.to('.swiper-slide-active', .2, {
        scale: 1,
        ease: Power4.easeOut,
    })
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
    ease: Power4.easeOut,
})
TweenMax.to('.swiper-slide', 0, {
    scale: .95,
})


const t1 = gsap.timeline({
    paused: true,
    reversed: true,
    default: {
      duration: 1,
    },
  });
//   t1.fromTo(".leSmile", { opacity: 0 }, { opacity: 1 });
//   t1.from(".leSmile", { x: -750, rotation: 360, duration: 4 });
const t = new TimelineLite({paused:true})

button.addEventListener('click', () => {
    console.log('eyes: ', choosenEyes)
    console.log('mouth: ', choosenMouth)
    TweenMax.to('form', .2, {
        opacity: 0,
    })
    document.querySelector('form').style.display = "none";
    createTheElement()
    t.play()
    setTimeout(() => {
        // let suppre = document.querySelector(".leSmile")
        // suppre.remove();
        // document.querySelector('form').style.display = "inherit";
        // TweenMax.to('form', .2, {
        //     opacity: 1,
        // })
        location.reload()
    }, 10000);
})

function toggletimelineTwo(timelineTwo) {
    timelineTwo.reversed() ? timelineTwo.play() : timelineTwo.reverse();
}

function createTheElement(){
    let activeContentmouth = document.querySelector('.swiper-slide-active .eyes svg')
    // console.log(activeContentmouth)
    choosenEyes = activeContentmouth
    
    let activeContent = document.querySelector('.swiper-slide-active .mouth svg')
    console.log(activeContent)
    choosenMouth = activeContent

    
    var element = document.createElement('div')
    element.className = 'leSmile'
    var faceElement = document.createElement('div')
    faceElement.className = 'smileFace'
    var faceEyesElement = document.createElement('div')
    faceEyesElement.className = 'smileFace-Eyes'
    var faceMouthElement = document.createElement('div')
    faceMouthElement.className = 'smileFace-Mouth'
    var faceHandElement = document.createElement('div')
    faceHandElement.className = 'smileFace-hand'
    var faceSecondHandElement = document.createElement('div')
    faceSecondHandElement.className = 'smileFace-hand-second'
    var faceThirdHandElement = document.createElement('div')
    faceThirdHandElement.className = 'smileFace-hand-third'
    // var mouth = document.createElement(choosenMouth)
    faceEyesElement.appendChild(choosenEyes)
    faceMouthElement.appendChild(choosenMouth)
    faceHandElement.insertAdjacentHTML('beforeend', handSvg)
    faceSecondHandElement.insertAdjacentHTML('beforeend', handTwoSvg)
    faceThirdHandElement.insertAdjacentHTML('beforeend', handThreeSvg)
    faceElement.appendChild(faceEyesElement)
    faceElement.appendChild(faceMouthElement)
    faceElement.appendChild(faceSecondHandElement)
    faceElement.appendChild(faceThirdHandElement)
    element.appendChild(faceHandElement)
    element.appendChild(svgContent)
    element.appendChild(faceElement)


    document.querySelector('body').appendChild(element)
    
    t.from(element, 1, {opacity:0, scale:0, 
        ease: "power2.inOut", duration: 2}, '+=.5')
    t.from(faceEyesElement, {opacity:0,ease: "power2.inOut", x:600, y:-50})
    t.from(faceSecondHandElement, {opacity:0,ease: "power2.inOut", x:600, y:-50}, "-=0.5")
    t.to(faceSecondHandElement, {opacity:0,ease: "power2.inOut", x:600, y:-50})
    t.from(faceMouthElement, {opacity:0,ease: "power2.inOut", x:600, y:-50})
    t.from(faceThirdHandElement, {opacity:0,ease: "power2.inOut", x:600, y:-50}, "-=0.5")
    t.to(faceThirdHandElement, {opacity:0,ease: "power2.inOut", x:600, y:-50})
    t.to(faceHandElement, {x:-600, y:-50 , opacity:0})
    t.to(element, 1, {ease: "bounce.out", y:-50, rotate: 360, duration:3},'+=0.5')
    t.to(element, 1, {ease: "bounce.out", y:0, rotate: -360,  duration:3},'+=0.5')
    .to(element, 1, {opacity:0, x:750, rotate:360, 
        ease: "power2.inOut"}, '+=0.5')
}
