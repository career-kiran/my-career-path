




document.addEventListener("DOMContentLoaded", function () {

  const careerList = document.getElementById("career-list");
  if (!careerList) return;

  const category = document.body.dataset.category;
  const subject = document.body.dataset.subject;


const params = new URLSearchParams(window.location.search);

const level = params.get("level") || document.body.dataset.level;
const bucket = params.get("bucket") || document.body.dataset.bucket;
  careerList.innerHTML = "";



  let filtered = window.careers;

filtered.sort((a, b) => a.name.localeCompare(b.name));

filtered.forEach(career => {

  // Match by category OR subject

if (
  (!level || (career.levels && career.levels.includes(level))) &&
  (!bucket || (career.bucket && career.bucket.toLowerCase().trim() === bucket.toLowerCase().trim())) &&
  (!category || (career.category && career.category.toLowerCase().trim() === category.toLowerCase().trim())) &&
  (!subject || (career.subjects && career.subjects.includes(subject)))
)
 {

    const card = document.createElement("div");
    card.className = "role-card";

    card.innerHTML = `
  <a href="${career.page}">
<img src="${career.image}" class="career-img">

   <h3>
  <span class="career-icon">${career.icon || ""}</span>
  ${career.name}
</h3>
    <p>${career.description}</p>
  </a>
`;
    careerList.appendChild(card);
  }

});

});
