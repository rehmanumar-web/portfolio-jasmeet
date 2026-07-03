// ==========================
// PAGE 6
// ==========================

// ---------- MUSIC ----------

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {

    music.volume = 0.45;

    musicButton.addEventListener("click", async () => {

        if (music.paused) {

            try{

                await music.play();

                musicButton.innerHTML = "⏸ Pause Our Song";

            }catch(err){

                console.log(err);

                alert("Couldn't play the song. Check the MP3 filename and path.");

            }

        }else{

            music.pause();

            musicButton.innerHTML = "🎵 Play Our Song";

        }

    });

}


// ---------- PETALS ----------

const petals = document.createElement("div");

petals.className = "petals";

document.body.appendChild(petals);

for(let i=0;i<28;i++){

    const petal = document.createElement("span");

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = 8 + Math.random()*8 + "s";

    petal.style.animationDelay = Math.random()*8 + "s";

    petal.style.opacity = .2 + Math.random()*.5;

    petal.style.transform =
    "scale(" + (.7 + Math.random()*.8) + ")";

    petals.appendChild(petal);

}


// ---------- LETTER FADE ----------

const letter = document.querySelector(".letter");

window.addEventListener("load",()=>{

    letter.animate([

        {

            opacity:0,

            transform:"translateY(40px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:1400,

        easing:"ease"

    });

});


// ---------- GLOW ----------

setInterval(()=>{

    letter.animate([

        {

            boxShadow:"0 0 60px rgba(255,200,110,.18)"

        },

        {

            boxShadow:"0 0 95px rgba(255,200,110,.34)"

        },

        {

            boxShadow:"0 0 60px rgba(255,200,110,.18)"

        }

    ],{

        duration:3500

    });

},3500);