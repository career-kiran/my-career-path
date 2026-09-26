document.addEventListener("DOMContentLoaded", function() {

fetch("header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});


const careerData = document.querySelector(".career-data");
const canonical = document.querySelector('link[rel="canonical"]');
const description = document.querySelector('meta[name="description"]');

if (careerData && canonical && description) {

    const hasWebPageSchema = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]')
    ).some(script => {
        try {
            const data = JSON.parse(script.textContent);
            return data && data["@type"] === "WebPage";
        } catch (e) {
            return false;
        }
    });

    if (!hasWebPageSchema) {

        const schema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": document.title.split("|")[0].trim(),
            "url": canonical.href,
            "description": description.content,
            "isPartOf": {
                "@type": "WebSite",
                "name": "Gaivo",
                "url": "https://gaivo.in/"
            }
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}

});