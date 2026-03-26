



document.addEventListener("DOMContentLoaded", function () {

  const careerList = document.getElementById("career-list");
  if (!careerList) return;

  const category = document.body.dataset.category;
  const subject = document.body.dataset.subject;

  careerList.innerHTML = "";

  window.careers.forEach(career => {

    // Match by category OR subject
    if (
      (category && career.category &&
        career.category.toLowerCase().trim() === category.toLowerCase().trim()) ||
      (subject && career.subjects &&
        career.subjects.includes(subject))
    ) {

      const card = document.createElement("div");
      card.className = "role-card";

      card.innerHTML = `
        <a href="${career.page}">
          <h3>${career.name}</h3>
          <p>${career.description}</p>
        </a>
      `;

      careerList.appendChild(card);
    }

  });

});