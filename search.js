function searchCareer(){

let input = document.getElementById("careerSearch").value.trim().toLowerCase();

let found = window.careers.find(career =>
career.name.toLowerCase().includes(input)
);

if(found){
window.location.href = "./" + found.page;
}else{
alert("Career not found");
}

}



setTimeout(function(){

const searchBox = document.getElementById("careerSearch");
const suggestionBox = document.getElementById("suggestions");

if (!searchBox || !suggestionBox) return;

searchBox.addEventListener("input", function(){

let input = searchBox.value.toLowerCase().trim();

suggestionBox.innerHTML = "";

if(input.length === 0) return;

let matches = window.careers.filter(career =>
career.name.toLowerCase().includes(input)
);

matches.slice(0,5).forEach(career => {

let item = document.createElement("div");
item.textContent = career.name;

item.onclick = function(){
window.location.href = "./" + career.page;
};

suggestionBox.appendChild(item);

});

});

},1500);






document.addEventListener("click", function(event) {


const searchBox = document.getElementById("careerSearch");
const suggestionBox = document.getElementById("suggestions");

if (!searchBox || !suggestionBox) return;


if (!searchBox.contains(event.target) && !suggestionBox.contains(event.target)) {
suggestionBox.innerHTML = "";
}

});


document.addEventListener("DOMContentLoaded", function(){

const subject = document.body.dataset.subject;

let matches = [];

if(subject){
matches = window.careers.filter(career =>
career.subjects.some(s => s.toLowerCase() === subject.toLowerCase())
);
}

const container = document.getElementById("careerResults");

if(container){
matches.forEach(career => {

let item = document.createElement("div");
item.className = "career-card";

item.innerHTML = `
<h3>${career.name}</h3>
<p>${career.description}</p>
<a href="./${career.page}">Learn More</a>
`;

container.appendChild(item);

});
}

});



