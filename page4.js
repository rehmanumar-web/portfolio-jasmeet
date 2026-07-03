const photos = [

{
file:"IMG_2675.PNG",
caption:"Your smile always wins."
},

{
file:"IMG_2676.PNG",
caption:"Still one of my favourite pictures."
},

{
file:"IMG_2678.jpg",
caption:"You looked absolutely beautiful here."
},

{
file:"IMG_2679.jpg",
caption:"I smiled the first time I saw this."
},

{
file:"IMG_2680.jpg",
caption:"One of those pictures I'll never get tired of."
},

{
file:"IMG_2681.jpg",
caption:"I genuinely love this one."
},

{
file:"IMG_2682.jpg",
caption:"You somehow make every photo look effortless."
},

{
file:"IMG_2684.jpg",
caption:"This picture makes me smile every time."
},

{
file:"IMG_2685.jpg",
caption:"You deserve the whole world."
},

{
file:"IMG_2689.jpg",
caption:"I could stare at this forever."
},

{
file:"IMG_2691.jpg",
caption:"One of the prettiest people I've ever met."
},

{
file:"IMG_2695.jpg",
caption:"I honestly don't think you realise how pretty you are."
},

{
file:"IMG_2698.jpg",
caption:"Every little thing about you is beautiful."
},

{
file:"IMG_2700.jpg",
caption:"Definitely one of my favourites ❤️"
},

{
file:"IMG_2690.jpg",
caption:"This belongs in a frame."
},

{
file:"IMG_2706.jpg",
caption:"Another picture I never get tired of."
},

{
file:"IMG_2699.jpg",
caption:"I love your eyes."
},


{
    file: "last.jpg",
    caption: "Saving one of the best for last ❤️"
}

];

const gallery=document.querySelector(".gallery");

const popup=document.getElementById("popup");

const popupImage=document.getElementById("popupImage");

const close=document.getElementById("close");

photos.forEach(photo=>{

const card=document.createElement("div");

card.className="polaroid";

const img=document.createElement("img");

img.src="Images/Gallery/"+photo.file;

const caption=document.createElement("div");

caption.className="caption";

caption.innerText=photo.caption;

card.appendChild(img);

card.appendChild(caption);

gallery.appendChild(card);

card.onclick=()=>{

popup.style.display="flex";

popupImage.src=img.src;

};

});

close.onclick=()=>{

popup.style.display="none";

};

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};