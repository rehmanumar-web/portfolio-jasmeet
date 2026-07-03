const memories = [

{
file:"memory1.jpg",
caption:"The beginning of something I'll never forget."
},

{
file:"memory2.jpg",
caption:"One of my favourite memories with you."
},

{
file:"memory3.jpg",
caption:"I still smile whenever I see this."
},

{
file:"memory4.jpg",
caption:"Just being with you made everything better."
},

{
file:"memory5.jpg",
caption:"One of those moments I wish lasted forever also we look very yellowish."
},

{
file:"memory6.jpg",
caption:"OUUU SHI."
},

{
file:"memory7.jpg",
caption:"One more memory I'll always hold onto."
},

{
file:"memory8.jpg",
caption:"You somehow make every moment special."
},

{
file:"memory9.jpg",
caption:"I don't think I'll ever stop loving this day."
},

{
file:"memory10.jpg",
caption:"Just us ❤️"
},

{
file:"memory11.jpg",
caption:"One of the happiest memories I have."
},

{
file:"memory12.jpg",
caption:"no wonder im smiling so hard look who's infront of me"
},

{
file:"memory13.jpg",
caption:"Every memory with you became my favourite."
},

{
file:"memory14.jpg",
caption:"You made ordinary days unforgettable."
},

{
file:"memory15.jpg",
caption:"Looking back at this still makes me smile."
},

{
file:"memory16.jpg",
caption:"I can be your dil ka daksaab in za ambulance"
},

{
file:"memory17.jpg",
caption:"it started from just a random science class."
},

{
file:"memory18.jpg",
caption:"Almost at the end..."
},

{
file:"memory19.jpg",
caption:"...but hopefully just the beginning of our story ❤️"
}

];

const scrapbook = document.querySelector(".scrapbook");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const close = document.getElementById("close");

memories.forEach(memory => {

const card = document.createElement("div");
card.className = "memory-card";

const img = document.createElement("img");
img.src = "Images/Memories/" + memory.file;

const caption = document.createElement("div");
caption.className = "memory-caption";
caption.innerText = memory.caption;

card.appendChild(img);
card.appendChild(caption);

scrapbook.appendChild(card);

card.onclick = () => {
popup.style.display = "flex";
popupImage.src = img.src;
};

});

close.onclick = () => {
popup.style.display = "none";
};

popup.onclick = (e) => {
if(e.target === popup){
popup.style.display = "none";
}
};