const reasons = [

"❤️ Your upside-down smile with the little dimples.",

"❤️ Your beautiful eyes.",

"❤️ The way you laugh.",

"❤️ The way you ragebait me 😭",

"❤️ The way you care about everyone, not just me.",

"❤️ Your love for flowers.",

"❤️ Your love for reading.",

"❤️ The way you always stay true to yourself.",

"❤️ I love who I am whenever I'm around you.",

"❤️ Seeing you instantly makes a bad day better.",

"❤️ Your voice.",

"❤️ The way you work so hard.",

"❤️ Your jewellery.",

"❤️ Your amazing hair.",

"❤️ Your jokes (fine... you win 🙄)",

"❤️ The way you handle me when I'm annoying.",

"❤️ The way we always watch romcoms.",

"❤️ Every version of you.",

"❤️ Your style.",

"❤️ The way you keep me guessing 😭",

"❤️ The fact that you chose me.",

"❤️ The way you are with your family.",

"❤️ The little things you do.",

"❤️ The way you remember the small details.",

"❤️ Talking to you feels like home.",

"❤️ We can be completely weird together.",

"❤️ You make ordinary moments feel special.",

"❤️ You make me want to become better.",

"❤️ You like me for me.",

"❤️ The way you want to fight for Afghan women's rights.",

"❤️ Because I genuinely believe we were meant for each other.",

"❤️ Because... I just love you. ❤️"
];

let current = 0;

const reason = document.getElementById("reason");

const counter = document.getElementById("counter");

const button = document.getElementById("nextBtn");

function showReason(){

counter.innerHTML=`${current+1} / ${reasons.length}`;

reason.innerHTML=reasons[current];

}

showReason();

button.onclick=()=>{

current++;

if(current<reasons.length){

showReason();

}else{

window.location.href="page4.html";

}

};