let sectionOverview=gsap.timeline({scrollTrigger:{trigger:".testimonial-container.aleks",start:"center bottom"}});sectionOverview.from(".testimonial-container.aleks",{x:200,opacity:0,duration:1.5}).from(".overview",{y:300,opacity:0,duration:1},"-=1");let sectionFeatures=gsap.timeline({scrollTrigger:{trigger:".testimonial-container.shira",start:"center bottom"}});sectionFeatures.from(".testimonial-container.shira",{y:300,opacity:0,duration:1.5},"-=1").from(".features",{y:300,opacity:0,duration:1},"-=1");let roadmap=gsap.timeline({scrollTrigger:{trigger:".features",start:"center bottom"}});roadmap.from("testimonial-container.mikel",{y:300,opacity:0,duration:1.5},"-=1").from(".footer",{y:300,opacity:0,duration:1},"-=1"),slides=document.querySelectorAll(".slide"),btns=document.querySelectorAll(".btn");let currentSlide=1;manualNav=function(e){slides.forEach((e=>{e.classList.remove("active"),btns.forEach((e=>{e.classList.remove("active")}))})),slides[e].classList.add("active"),btns[e].classList.add("active")},btns.forEach(((e,t)=>{e.addEventListener("click",(()=>{manualNav(t),currentSlide=t}))})),repeat=function(e){let t=document.getElementsByClassName("active"),i=1;repeater=()=>{setTimeout((function(){[...t].forEach((e=>{e.classList.remove("active")})),slides[i].classList.add("active"),slides[i].classList.add("active"),i++,slides.length==i&&(i=0),i>=slides.length||repeater()}),2e4)},repeater()},repeat();
//# sourceMappingURL=index.b6d84d94.js.map