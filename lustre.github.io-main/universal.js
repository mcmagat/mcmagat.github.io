document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burgerButton");
    const nav = document.querySelector("nav");
    const closeNav = document.getElementById("closeNav");

    // Open the menu
    burger.addEventListener("click", () => {
        nav.classList.add("open");
    });

    // Close the menu using X button
    closeNav.addEventListener("click", () => {
        nav.classList.remove("open");
    });

    // Close when clicking any menu link
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
});