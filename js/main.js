

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
// animation compteur
const nombres = document.querySelectorAll("[data-target]");

function animerCompteurs() {

    nombres.forEach(nombre => {

        let valeur = 0;
        const cible = parseInt(nombre.dataset.target);
        const increment = cible / 100;

        function update() {

            if (valeur < cible) {

                valeur += increment;

                if (cible === 95) {
                    nombre.textContent = Math.ceil(valeur) + "%";
                } else {
                    nombre.textContent = Math.ceil(valeur);
                }

                setTimeout(update, 20);

            } else {

                if (cible === 95) {
                    nombre.textContent = cible + "%";
                } else {
                    nombre.textContent = cible;
                }

            }

        }

        update();

    });

}

const sectionCompteur = document.querySelector(".stats, .chiffres");

if (sectionCompteur) {

    const observerCompteur = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            animerCompteurs();

            observerCompteur.unobserve(sectionCompteur);

        }

    }, {
        threshold: 0.5
    });

    observerCompteur.observe(sectionCompteur);

}
// Animation fade-in
const sections = document.querySelectorAll(".fade-in");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    sectionObserver.observe(section);
});