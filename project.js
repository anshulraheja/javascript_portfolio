import {projects} from './projectData.js'

window.onload = function() { 

    var live_button = document.createElement("a");
    var source_button = document.createElement("a");
    var unordered = document.querySelector(".project-container");

    for( let i=0;i<projects.length;i++){
        var div = document.createElement("div");
        div.className ="inner-project-container";
        div.innerHTML = `<h1 class="project-name">${projects[i].title}</h1> 
            <p class="project-description">${projects[i].description}</p>
            <button class="btn-live"><a href=${projects[i].live} target="_blank">Live Project</a></button>
            <button class="btn-view-source"><a href=${projects[i].sourceCode} target="_blank">View Source Code</a></button>`;
          unordered.appendChild(div);
    }
};