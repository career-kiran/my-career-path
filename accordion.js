


function resetQuestions() {
  document.querySelectorAll('.yes-btn, .no-btn').forEach(btn => {
    btn.classList.remove('yes-active', 'no-active');
  });

  const result = document.getElementById('reflection-result');
  if (result) {
    result.style.display = "none";
  }
}


const accordions = document.querySelectorAll(".accordion-header");

if (accordions.length > 0) {

  accordions.forEach(button => {
    button.addEventListener("click", function () {

      const content = this.nextElementSibling;

      // CLOSE all others
      document.querySelectorAll(".accordion-content").forEach(item => {
        if (item !== content) {
          item.style.display = "none";
        }
      });

      document.querySelectorAll(".accordion-header").forEach(btn => {
        if (btn !== this) {
          btn.classList.remove("active");
        }
      });

      // TOGGLE current
if (content.style.display === "block") {
    content.style.display = "none";
    this.classList.remove("active");
    resetQuestions();
} else {
    content.style.display = "block";
    this.classList.add("active");

setTimeout(() => {
    this.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}, 50);
}

});
});
}