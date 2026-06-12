

// dark mood and local storage
let btn = document.querySelector("#btn");

// Vérifier le thème enregistré
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("bg");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("bg");

    if (document.body.classList.contains("bg")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// navbar scroller
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// button scroller
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});