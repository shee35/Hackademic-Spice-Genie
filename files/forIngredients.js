var title = document.getElementById("title");
var output = document.getElementById("output");
var RName = sessionStorage.getItem("RName");
jsarray = JSON.parse(sessionStorage.getItem("arr"));
console.log(RName);
output.innerHTML = jsarray;
title.innerHTML= RName;

var comb = '';
for(var i = 0; i<jsarray.length ; i++){
     comb += jsarray[i]; 
    if(jsarray[i]===',')
    {
        console.log(comb);
        comb = '';
    }
}

/*
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);*/