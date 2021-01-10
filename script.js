window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
}



document.querySelector("#tema2").addEventListener("mouseenter", tema2Hover);
document.querySelector("#tema3").addEventListener("mouseenter", tema3Hover);
document.querySelector("#tema4").addEventListener("mouseenter", tema4Hover);
document.querySelector("#tema5").addEventListener("mouseenter", tema5Hover);


function tema2Hover() {
    document.querySelector(".img2").classList.add("opacity");
    document.querySelector("#tema2hover").classList.remove("hide");
}

function tema3Hover() {
    document.querySelector(".img3").classList.add("opacity");
    document.querySelector("#tema3hover").classList.remove("hide");
}

function tema4Hover() {
    document.querySelector(".img4").classList.add("opacity");
    document.querySelector("#tema4hover").classList.remove("hide");
}

function tema5Hover() {
    document.querySelector(".img5").classList.add("opacity");
    document.querySelector("#tema5hover").classList.remove("hide");
}



document.querySelector(".img2").addEventListener("mouseout", fjernHover2);
document.querySelector(".img3").addEventListener("mouseout", fjernHover3);
document.querySelector(".img4").addEventListener("mouseout", fjernHover4);
document.querySelector(".img5").addEventListener("mouseout", fjernHover5);

function fjernHover2() {
    document.querySelector(".img2").classList.remove("opacity");
    document.querySelector("#tema2hover").classList.add("hide");
}

function fjernHover3() {
    document.querySelector(".img3").classList.remove("opacity");
    document.querySelector("#tema3hover").classList.add("hide");
}

function fjernHover4() {
    document.querySelector(".img4").classList.remove("opacity");
    document.querySelector("#tema4hover").classList.add("hide");
}

function fjernHover5() {
    document.querySelector(".img5").classList.remove("opacity");
    document.querySelector("#tema5hover").classList.add("hide");
}
