let element = document.querySelector('.moreAboutUs');
let video = document.getElementsByClassName('video');
let changeIm = document.getElementById("firstI")
let change2 = document.getElementById("secI")

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