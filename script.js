window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }

}




window.addEventListener("load", animationStart);

function animationStart() {
    console.log("animationStart");

    setTimeout(function () {
        document.querySelector("#b").classList.remove("hide");
    }, 500);

    setTimeout(function () {
        document.querySelector("#i").classList.remove("hide");
    }, 600);

    setTimeout(function () {
        document.querySelector("#r").classList.remove("hide");
    }, 700);

    setTimeout(function () {
        document.querySelector("#i2").classList.remove("hide");
    }, 800);

    setTimeout(function () {
        document.querySelector("#t").classList.remove("hide");
    }, 900);

    setTimeout(function () {
        document.querySelector("#a").classList.remove("hide");
    }, 1000);

    setTimeout(function () {
        document.querySelector("#y").classList.remove("hide");
    }, 1600);

    setTimeout(function () {
        document.querySelector("#o").classList.remove("hide");
    }, 1700);

    setTimeout(function () {
        document.querySelector("#o2").classList.remove("hide");
    }, 1800);

    setTimeout(function () {
        document.querySelector("#n").classList.remove("hide");
    }, 1900);

    setTimeout(function () {
        document.querySelector("#s").classList.remove("hide");
    }, 2000);

    setTimeout(function () {
        document.querySelector("#p").classList.remove("hide");
    }, 2700);

    setTimeout(function () {
        document.querySelector("#o3").classList.remove("hide");
    }, 2800);

    setTimeout(function () {
        document.querySelector("#r2").classList.remove("hide");
    }, 2900);

    setTimeout(function () {
        document.querySelector("#t2").classList.remove("hide");
    }, 3000);

    setTimeout(function () {
        document.querySelector("#f").classList.remove("hide");
    }, 3100);

    setTimeout(function () {
        document.querySelector("#o4").classList.remove("hide");
    }, 3200);

    setTimeout(function () {
        document.querySelector("#l").classList.remove("hide");
    }, 3300);

    setTimeout(function () {
        document.querySelector("#i3").classList.remove("hide");
    }, 3400);

    setTimeout(function () {
        document.querySelector("#o5").classList.remove("hide");
    }, 3500);
}
