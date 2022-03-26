//GSAP
let sectionOverview = gsap.timeline({
    scrollTrigger: {
        trigger: '.testimonial-container.aleks',
        start: "center bottom"
    }
});
sectionOverview.from(".testimonial-container.aleks", {
    x: 200,
    opacity: 0,
    duration: 1.5
}).from(".overview", {
    y: 300,
    opacity: 0,
    duration: 1
}, "-=1");
let sectionFeatures = gsap.timeline({
    scrollTrigger: {
        trigger: '.testimonial-container.shira',
        start: "center bottom"
    }
});
sectionFeatures.from(".testimonial-container.shira", {
    y: 300,
    opacity: 0,
    duration: 1.5
}, "-=1").from(".features", {
    y: 300,
    opacity: 0,
    duration: 1
}, "-=1");
let roadmap = gsap.timeline({
    scrollTrigger: {
        trigger: '.features',
        start: "center bottom"
    }
});
roadmap.from("testimonial-container.mikel", {
    y: 300,
    opacity: 0,
    duration: 1.5
}, "-=1").from(".footer", {
    y: 300,
    opacity: 0,
    duration: 1
}, "-=1");
//Slider
slides = document.querySelectorAll('.slide');
btns = document.querySelectorAll('.btn');
let currentSlide = 1;
// Slider Manual Navigation
manualNav = function(manual) {
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
};
btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    });
});
// Autoplay
repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;
    repeater = ()=>{
        setTimeout(function() {
            [
                ...active
            ].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            slides[i].classList.add('active');
            i++;
            if (slides.length == i) i = 0;
            if (i >= slides.length) return;
            repeater();
        }, 20000);
    };
    repeater();
};
repeat();

//# sourceMappingURL=index.a72bce2f.js.map
