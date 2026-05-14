function sharePage(){
  if(navigator.share){
    navigator.share({
      title: document.title,
      text: "Check out this career:",
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied! You can share it now.");
  }
}

function saveCareer(){

  let saved = JSON.parse(localStorage.getItem("savedCareers")) || [];
  let titleElement = document.querySelector(".career-title");

  if (!titleElement) return;

  let careerName = titleElement.innerText;

  if(!saved.includes(careerName)){
    saved.push(careerName);
    localStorage.setItem("savedCareers", JSON.stringify(saved));
    alert(careerName + " saved!");
  } else {
    alert("Already saved!");
  }
}

// ✅ ADD THIS PART
window.sharePage = sharePage;
window.saveCareer = saveCareer;