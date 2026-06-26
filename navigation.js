function goBack() {
window.history.back();
}





function scrollToTop() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}





window.onscroll = function() {
let btn = document.getElementById("scrollTopBtn");

if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
btn.style.display = "block";
} else {
btn.style.display = "none";
}
};






// SAVE PAGE
function savePage() {

let pageTitle = document.title;
let pageUrl = window.location.href;

let savedPages = JSON.parse(localStorage.getItem("savedCareers")) || [];

let page = {title: pageTitle, url: pageUrl};

let exists = savedPages.some(item => item.url === pageUrl);

if(!exists){
savedPages.push(page);
localStorage.setItem("savedCareers", JSON.stringify(savedPages));
alert("Career saved!");
}else{
alert("Already saved.");
}

}


// SHARE PAGE
function sharePage(){

if(navigator.share){
navigator.share({
title: document.title,
url: window.location.href
});
}else{
navigator.clipboard.writeText(window.location.href);
alert("Link copied. You can share it.");
}

}




