



document.addEventListener("DOMContentLoaded", function () {

    const examList = document.getElementById("exam-list");

    if (!examList) return;

    const exams = window.careers.filter(
        item => item.contentType === "exam"
    );

    exams.sort((a, b) => a.name.localeCompare(b.name));

    exams.forEach(exam => {

        const card = document.createElement("a");

        card.href = exam.page;
        card.className = "subject-card";

        card.textContent = exam.name;

        examList.appendChild(card);

    });

});