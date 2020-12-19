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
    let fetchTerm = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&to=20&q=`+ userinput.value;
    let response = await fetch(fetchTerm);
    console.log(response);
    let data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
function generateHTML(results) {
  let generatedHTML = "";
  results.map((result) =>{
    generatedHTML += `
    <div class="album">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${result.recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${result.recipe.label}</h5>
            <p class="card-text">"${result.recipe.ingredients[0].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${result.recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      `;
  });
    document.getElementById('container').innerHTML = generatedHTML;
}
