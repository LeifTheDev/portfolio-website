let darkBackgroundOverlay = document.getElementById(
    "mobile-navigation-dark-background"
);
let navigationMenu = document.getElementById("mobile-navigation-menu");

function toggleMobileNavigation() {
    darkBackgroundOverlay.hidden = !darkBackgroundOverlay.hidden;
    navigationMenu.hidden = !navigationMenu.hidden;
    navigationMenu.classList.toggle("mobile-navigation-menu");
}

document.addEventListener("click", (event) => {
    if (event.target.closest("#menu-icon")) {
        toggleMobileNavigation();
        return;
    }
});
