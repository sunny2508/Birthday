let button = document.querySelector("#button");
let card = document.querySelector(".card");
let container = document.querySelector(".container");
const canvas = document.querySelector("#confetti");

const jsConfetti = new JSConfetti()


button.addEventListener("click",()=>{
    window.location.href = "index.html";
});

card.addEventListener("click",(e)=>{
    if(card.style.transform === 'rotateY(-180deg)')
    {
        card.style.transform = 'rotateY(0deg)';
        container.style.transform = 'translateX(0)';
        jsConfetti.clearCanvas();
    }
    else{
        card.style.transform = 'rotateY(-180deg)';
        container.style.transform = 'translateX(25vw)';
        jsConfetti.addConfetti({emojis:['🌸'],
        confettiNumber:100});
    }
});

card.addEventListener("mouseover",(e)=>{
    jsConfetti.addConfetti({emojis:['🌸'],
    confettiNumber:100});

})

