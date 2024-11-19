console.log("Scripts Loading..");

document.addEventListener("click", (event) => {
    if (event.target.closest("#about-me-card")) {
        location.href = "./about.html";
        return;
    }
    if (event.target.closest("#resume-card")) {
        location.href = "./resume.html";
        return;
    }
    if (event.target.closest("#projects-card")) {
        location.href = "./projects.html";
        return;
    }
    if (event.target.closest("#contact-form-card")) {
        location.href = "./contact.html";
        return;
    }
});
