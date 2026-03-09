function searchCareer(){

let input = document.getElementById("careerSearch").value.trim().toLowerCase();

let found = window.careers.find(career =>
career.name.toLowerCase().includes(input)
);

if(found){
window.location.href = found.page;
}else{
alert("Career not found");
}

}



setTimeout(function(){

const searchBox = document.getElementById("careerSearch");
const suggestionBox = document.getElementById("suggestions");

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
window.location.href = career.page;
};

suggestionBox.appendChild(item);

});

});

},500);






document.addEventListener("click", function(event) {

const searchBox = document.getElementById("careerSearch");
const suggestionBox = document.getElementById("suggestions");

if (!searchBox.contains(event.target) && !suggestionBox.contains(event.target)) {
suggestionBox.innerHTML = "";
}

});