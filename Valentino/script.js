for(let i=0;i<80;i++){
    let star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.animationDelay=Math.random()*3+"s";
    document.body.appendChild(star);
}
const heart = document.getElementById("heart");
let musicStarted = false;
let audio = document.createElement("iframe");
audio.width = 0;
audio.height = 0;
audio.src = "https://tarekkamoun.publit.io/file/s.mp3";
audio.frameBorder = 0;
audio.allow = "autoplay";

heart.addEventListener("click", () => {
    if(!musicStarted){
        heart.classList.add("beat");
        document.body.appendChild(audio);
        musicStarted = true;
    }
});