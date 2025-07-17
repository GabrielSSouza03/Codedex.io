const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
  ];


const captionsArray = [
    "O my gosh",
    "crube da bolacha",
    "Dooh"
]; 
let image = document.getElementById("random-meme"); 
let caption = document.getElementById("random-caption"); 
let button = document.getElementById("generator-button"); 

button.addEventListener("click",function(){
    let randomIndex1 = Math.floor(Math.random() * memeArray.length);
    let randomIndex2 = Math.floor(Math.random() * captionsArray.length);

    image.src =memeArray[randomIndex1];
    caption.innerText = captionsArray[randomIndex2];
  
}) 