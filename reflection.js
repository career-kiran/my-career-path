let totalQuestions = document.querySelectorAll(".reflection-question").length;

document.querySelectorAll(".reflection-question").forEach(function(q){

let yes = q.querySelector(".yes-btn");
let no = q.querySelector(".no-btn");

yes.onclick = function(){

yes.classList.add("yes-active");
no.classList.remove("no-active");

q.dataset.answer = "yes";

checkAnswers();

}

no.onclick = function(){

no.classList.add("no-active");
yes.classList.remove("yes-active");

q.dataset.answer = "no";

checkAnswers();

}

});

function checkAnswers(){

let answered = 0;

document.querySelectorAll(".reflection-question").forEach(function(q){

if(q.dataset.answer){
answered++;
}

});

if(answered === totalQuestions){
document.getElementById("reflection-result").style.display = "block";
}

}