const projects = [
    {
        "title":"project 3",
        "date":"01 jan 2021",
        "description":"lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
        "live" : "/",
        "sourceCode":"/"
    },
    {
        "title":"project 2",
        "date":"01 jan 2021",
        "description":"lorem ipsum dolor sit amet",
        "live" : "/",
        "sourceCode":"/"
    }
]

var live_button = document.createElement("a");
var source_button = document.createElement("a");
var unordered = document.querySelector(".project-container");

for( let i=0;i<projects.length;i++){
    var div = document.createElement("div");
    div.className ="inner-project-container";
    div.innerHTML = `<h1 class="project-name">${projects[i].title}</h1> 
        <small class="project-date">${projects[i].date}</small>
        <p class="project-description">${projects[i].description}</p>
        <button class="btn-live"><a href=${projects[i].live}>Live</a></button>
        <button class="btn-view-source"><a href=${projects[i].sourceCode}>View Source</a></button>`;
    unordered.appendChild(div);
}

