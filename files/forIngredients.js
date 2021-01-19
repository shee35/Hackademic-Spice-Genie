var title = document.getElementById("title");
var output = document.getElementById("disply");
var pic = document.getElementById("pic");
var RName = sessionStorage.getItem("RName");
var image = sessionStorage.getItem("image");


pic.setAttribute("src", image);
jsarray = JSON.parse(sessionStorage.getItem("arr"));
console.log(RName);
title.innerHTML= RName;

let generatedHTML = "";
var comb = '';
for(var i = 0; i<jsarray.length ; i++){
     comb += jsarray[i]; 
    if(jsarray[i]===',')
    {
        generatedHTML += `<p style="text-align:left;"><input type="checkbox" />${comb}</p>`; 
        console.log(comb);
        comb = '';
    }
}

output.innerHTML = generatedHTML;
/*
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);*/