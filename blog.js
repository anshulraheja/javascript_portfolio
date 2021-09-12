import {blogs} from './blogData.js'

var unordered = document.querySelector(".blog-container");

for( let i=0;i<blogs.length;i++){
    var div = document.createElement("div");
    div.className ="inner-blog-container";
    div.innerHTML = `<h1 class="blog-name">${blogs[i].title}</h1> 
        <small class="blog-date">${blogs[i].date}</small>
        <p class="blog-description">${blogs[i].description}</p>
        <button class="btn-live"><a href=${blogs[i].read}>Read</a></button>`;
    unordered.appendChild(div);
}

