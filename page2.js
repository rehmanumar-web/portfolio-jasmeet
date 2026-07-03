const earth = document.createElement("img");
earth.src = "Videos/earth.jpg";

earth.className = "earth";

document
.getElementById("earthContainer")
.appendChild(earth);



setTimeout(()=>{

    document.body.style.transition="opacity 2s";
    document.body.style.opacity="0";

},10000);



setTimeout(()=>{

    window.location.href="page3.html";

},12000);
