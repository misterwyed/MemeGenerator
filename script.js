const memeArray = [
    "meme1.jpeg", "meme2.jpeg", "meme3.jpeg", "meme4.jpeg"]
    
  const captionsArray=["I came. I saw. I made it awkward.",
  "My bed is a magical place. I suddenly remember everything I had to do.",
"Life is short. Smile while you still have teeth.",
"Birthdays are good for you. The more you have, the longer you live.",
  "You can't be too good at something. You can be too bad at something."]

let meme=document.getElementById("random-meme");
let caption=document.getElementById("random-caption");
let button=document.getElementById("generator-button");

button.addEventListener("click",()=>{
    let meme_index=Math.floor(Math.random()*memeArray.length);
    let caption_index=Math.floor(Math.random()*captionsArray.length);
    meme.src=memeArray[meme_index];
    caption.innerHTML=captionsArray[caption_index];
});