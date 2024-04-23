let element = document.querySelector('.moreAboutUs');
let video = document.getElementsByClassName('video');
let changeIm = document.getElementById("firstI")
let change2 = document.getElementById("secI")

let kierunkiH3 = document.getElementsByClassName("kierunki-h3-main")
kierunkiH3[0].style.transform = `translateY(100px)`;
kierunkiH3[0].style.opacity = `0`;
let prog = document.getElementsByClassName("prog")
prog[0].style.transform = `translateX(-100px)`;
prog[0].style.opacity = `0`;
let robo = document.getElementsByClassName("robo")
robo[0].style.transform = `translateX(100px)`;
robo[0].style.opacity = `0`;
let innoh3 = document.getElementById("innoh3")
innoh3.style.transform = `translateX(40px)`;
innoh3.style.opacity = `0`;
let innoP = document.getElementById("innoP")
innoP.style.transform = `translateX(-40px)`;
innoP.style.opacity = `0`;

let tok = document.getElementById("tok")
let tik = document.getElementById("tik")

tok.addEventListener("mouseover", ()=>{
    tik.src = "images/tiktok2.svg"
})
tok.addEventListener("mouseleave", ()=>{
    tik.src = "images/tiktok.svg"
})

button = document.getElementsByClassName("hamburger")
sidebar = document.getElementsByClassName("menu-list")

button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
})
/*let posty = [
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTechnikumNewTechnologywZamosciu%2Fposts%2Fpfbid02RJ3WiEJjEVY69Ei3pdGFEHVvRRoRvtXELT9iKFu2689XcNThgXuYFdKEogGjSEFAl&show_text=true&width=500&is_preview=true" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTechnikumNewTechnologywZamosciu%2Fposts%2Fpfbid0G3w3zZDFJKTpAiQRLNXs3biosp1x6xghNMRNL5rjptbvVxEY7pQqD7KHiw82qbQGl&show_text=true&width=500&is_preview=true" width="500" height="800" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTechnikumNewTechnologywZamosciu%2Fposts%2Fpfbid02qJoPcrSYjMNuGpVpp3PbdpGUNpmfm5NKvdBWsMAaeAFwnkZbwSPerT4Nq6Wpa7ZEl&show_text=true&width=500&is_preview=true" width="500"height="800"  style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
  ];
  
  let aktualnosciFB = document.querySelector(".aktualnosciFB"); 
  let leftAr = document.querySelector(".icon-angle-double-left");
  let rightAr = document.querySelector(".icon-angle-double-right");
  
  let currentIndex = 0; 
  
  aktualnosciFB.innerHTML = posty[0];

  function updateAktualnosciFB() {
    aktualnosciFB.innerHTML = '';
    
    aktualnosciFB.innerHTML = posty[currentIndex];
  }
  
  leftAr.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + posty.length) % posty.length;
    updateAktualnosciFB();
    animateSlide('left');
  });
  
  rightAr.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % posty.length;
    updateAktualnosciFB();
    animateSlide('right');
  });*/
  
  

window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollHeight = window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    if(scrollTop<0.1*scrollHeight){
        kierunkiH3[0].style.transform = `translateY(100px)`;
        kierunkiH3[0].style.opacity = `0`;
        prog[0].style.transform = `translateX(-100px)`;
        prog[0].style.opacity = `0`;
        robo[0].style.transform = `translateX(100px)`;
        robo[0].style.opacity = `0`;
        innoh3.style.transform = `translateX(40px)`;
        innoh3.style.opacity = `0`;
        innoP.style.transform = `translateX(-40px)`;
        innoP.style.opacity = `0`;
    }
    if(scrollTop>0.2*scrollHeight){
        kierunkiH3[0].style.transform = `translateX(0px)`;
        kierunkiH3[0].style.opacity = `100%`;
        kierunkiH3[0].style.transition = "all .2s linear"
    }
    if(scrollTop>0.3*scrollHeight){
        prog[0].style.transform = `translateX(0px)`;
        prog[0].style.opacity = `100%`;
        prog[0].style.transition = "all .3s linear"
        robo[0].style.transform = `translateX(0px)`;
        robo[0].style.opacity = `100%`;
        robo[0].style.transition = "all .3s linear"

    }
    if(scrollTop>1.2*scrollHeight){
        innoh3.style.transform = `translateX(0px)`;
        innoh3.style.transition = "all .4s linear"
        innoh3.style.opacity = `100`;
        innoP.style.transform = `translateX(0px)`;
        innoP.style.opacity = `100`;
        innoP.style.transition = "all .5s linear"
    }
})

changeIm.addEventListener('click', ()=>{
    changeIm.classList.add("active")
    change2.classList.remove("active")
    video[0].style.backgroundImage= "url('images/robo2.png')"
})
change2.addEventListener('click', ()=>{
    change2.classList.add("active")
    changeIm.classList.remove("active")
    video[0].style.backgroundImage = "url('images/ai2.png')"
    console.log( "url(images/ai.png) center/cover no-repeat;")

})

let zm = 1

setInterval(() => {
    change2.classList.toggle("active")
    changeIm.classList.toggle("active")
    if(zm==1){
        video[0].style.opacity = "0%"
        video[0].style.transition = "all 1s linear"
        video[0].style.backgroundImage = "url('images/ai2.png')"
        video[0].style.opacity = "100%"
        zm=0
    }
    else{
        zm=1
        video[0].style.opacity = "0%"
        video[0].style.transition = "all 1s linear"
        video[0].style.backgroundImage = "url('images/robo2.png')"
        video[0].style.opacity = "100%"
    }

}, 5000);

element.addEventListener('click', ()=>{
    document.getElementById('kierunki').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

let text = "oznaj nas bliżej.";
function typeWriter(text, i) {
    if (i < text.length && animationInProgress) {
        element.innerHTML += text.charAt(i);
        animationTimeout = setTimeout(function() {
            typeWriter(text, i + 1);
        }, 80);
    }
}

element.addEventListener('mouseover', function() {
    element.textContent = "P"
    if (!animationInProgress) {
      animationInProgress = true;
      typeWriter(text, 0);
    }
});
element.addEventListener('click', function() {
    element.textContent = "Po"
    if(!animationInProgress){
        animationInProgress = true;
        typeWriter(text, 0);
    }
});

element.addEventListener('mouseout', function() {
    element.textContent = "Poznaj nas bliżej."
    animationInProgress = false;
    clearTimeout(animationTimeout);
  });