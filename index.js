const wrapper = document.getElementById("skillsWrapper");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

if (wrapper && next && prev) {

    next.addEventListener("click", () => {
        wrapper.scrollBy({
            left: wrapper.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        wrapper.scrollBy({
            left: -wrapper.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

}

const expContainer = document.getElementById("exp-container");
const expNext = document.getElementById("exp-next");
const expPrev = document.getElementById("exp-prev");

if (expContainer && expNext && expPrev) {

    expNext.addEventListener("click", () => {
        expContainer.scrollBy({
            left: expContainer.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    expPrev.addEventListener("click", () => {
        expContainer.scrollBy({
            left: -expContainer.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

}

function slideGallery(containerId, direction) {

    const container = document.getElementById(containerId);

    if (container) {
        container.scrollBy({
            left: direction * container.clientWidth * 0.8,
            behavior: "smooth"
        });
    }

}

function toggleSidebar() {

    const sidebar = document.getElementById("sideNavbar");
    const button = document.getElementById("sidebarToggle");

    if (!sidebar || !button) {
        console.log("Sidebar or button not found!");
        return;
    }

    const isOpen = sidebar.classList.toggle("show");

    button.classList.toggle("open", isOpen);
    button.textContent = isOpen ? "❮" : "❯";

}

