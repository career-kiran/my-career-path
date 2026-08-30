



function sharePage() {
    const pageUrl = window.location.href;

    const heading = document.querySelector(".career-header h1");
    const careerName = heading
        ? heading.textContent.trim()
        : document.title;

    if (navigator.share) {
        navigator.share({
            title: `Gaivo - ${careerName}`,
            text: `Explore the ${careerName} career on Gaivo.`,
            url: pageUrl
        }).catch(() => {
            // User cancelled sharing
        });
    } else {
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                alert("Career page link copied!");
            })
            .catch(() => {
                alert("Copy this page link:\n\n" + pageUrl);
            });
    }
}



document.addEventListener("DOMContentLoaded", function () {

    const shareButtons = document.querySelectorAll(".share-button");

    shareButtons.forEach(function (button) {

        const icon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        icon.setAttribute("class", "share-icon");
        icon.setAttribute("width", "20");
        icon.setAttribute("height", "20");
        icon.setAttribute("viewBox", "0 0 24 24");
        icon.setAttribute("fill", "none");
        icon.setAttribute("stroke", "currentColor");
        icon.setAttribute("stroke-width", "2");
        icon.setAttribute("stroke-linecap", "round");
        icon.setAttribute("stroke-linejoin", "round");

        icon.innerHTML = `
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.6" y1="13.5" x2="15.4" y2="17.5"></line>
            <line x1="15.4" y1="6.5" x2="8.6" y2="10.5"></line>
        `;

        button.textContent = "";
        button.appendChild(icon);
        
    });

});