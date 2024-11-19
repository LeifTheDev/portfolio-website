let popup = document.getElementById("popup");
let popupContainer = document.getElementById("popup-container");
let popupTitle = document.getElementById("popup-title");
let popupDescription = document.getElementById("popup-description");
let projectTechnologiesList = document.getElementById(
    "project-technology-used-list"
);
let projectLink = document.getElementById("project-visit-github-link");
let darkBackground = document.getElementById("dark-background");

function showPopup(title, description, technologiesList, link) {
    popupTitle.innerText = title;
    popupDescription.innerText = description;
    projectTechnologiesList.innerHTML = "";
    technologiesList.forEach((technology) => {
        let technologyElement = document.createElement("p");
        technologyElement.innerText = technology;
        projectTechnologiesList.appendChild(technologyElement);
    });
    projectLink.href = link;
    popupContainer.hidden = false;
    darkBackground.hidden = false;
}

function projectButtonClicked(project) {
    const title = project.querySelector("h2").innerText;
    const description = project.querySelector("p").innerText;
    const technologiesListElements = project
        .querySelector("section")
        .querySelectorAll("h2");
    let technologiesList = [];
    technologiesListElements.forEach((technology) => {
        technologiesList.push(technology.innerText);
    });
    const link = project.querySelector("a").href;
    console.log(link);
    showPopup(title, description, technologiesList, link);
}

document.addEventListener("click", (event) => {
    if (event.target.closest("#dark-background")) {
        popupContainer.hidden = true;
        darkBackground.hidden = true;
        return;
    }
    if (event.target.closest(".dashboard-item")) {
        projectButtonClicked(event.target.closest(".dashboard-item"));
        return;
    }
});
