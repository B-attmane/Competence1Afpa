const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
});

burger.addEventListener('click', show);

function show() {
    sidebar.classList.toggle("active");
}