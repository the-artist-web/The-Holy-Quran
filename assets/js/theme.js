/**
 * #HEADER
 */
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    };
});

/**
 * #DARK MOOD
 */
const HTML = document.documentElement;
const sun = document.querySelector("[data-sun]");
const moon = document.querySelector("[data-moon]");

if (localStorage.length >= 0) {
    HTML.dataset.theme = localStorage.dark;
    moon.classList.add(localStorage.moon);
    sun.classList.add(localStorage.sun);
}

moon.addEventListener("click", () => {
    HTML.dataset.theme = "dark";
    moon.classList.add("active");
    sun.classList.add("active");

    localStorage.setItem("dark", "dark");
    localStorage.setItem("moon", "active");
    localStorage.setItem("sun", "active");
});

sun.addEventListener("click", () => {
    HTML.dataset.theme = "light";
    moon.classList.remove("active");
    sun.classList.remove("active");

    localStorage.setItem("dark", "light");
    localStorage.setItem("moon", null);
    localStorage.setItem("sun", null);
});