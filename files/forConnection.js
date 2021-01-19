var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var userinput = document.getElementById('srch');

document.getElementById('searching').addEventListener("click", function() {
    sendAPIRequest();
});

async function sendAPIRequest() {
    var APP_ID = "196ee461";
    var API_KEY = "28a90ed3d4a21ef85469ade6d3894ed1";
    let fetchTerm = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&to=36&q=`+ userinput.value;
    let response = await fetch(fetchTerm);
    console.log(response);
    let data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
var title1;
var arr;
function generateHTML(results) {
  let generatedHTML = "";
  results.map((result) =>{
    arr = result.recipe.ingredientLines.slice();
    title1 = result.recipe.label;
    generatedHTML += `
    <div class="item">
       <img src="${result.recipe.image}" alt="img">
       <div class="flex-container">
         <h1 class="recipe-name">${result.recipe.label}</h1>
         <a class="view-btn" target="_blank" href="${
           result.recipe.url
         }">View Recipe</a>
       </div>
       <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
       <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
       <a class="view-btn" target="_blank" onClick = "myFunction('${result.recipe.label}','${result.recipe.image}', '${result.recipe.ingredientLines}')">view missing ingredients</a>
     </div>
      `;
  });
    document.getElementById('output').innerHTML = generatedHTML;
}

function myFunction(value,img, arr){
  sessionStorage.setItem("RName", value);
  sessionStorage.setItem("image", img);
  sessionStorage.setItem("arr", JSON.stringify(arr));
  location.href = "ingredientDetails.html";
}
