document.getElementById('searching').addEventListener("click", function() {
    sendAPIRequest();
});

async function sendAPIRequest() {
    var APP_ID = "196ee461";
    var API_KEY = "28a90ed3d4a21ef85469ade6d3894ed1";
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useData(data);
}

function useData(data) {
    document.getElementById('container').innerHTML = `
    <div class="album py-5 ">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[0].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[0].recipe.label}</h5>
            <p class="card-text">"${data.hits[0].recipe.ingredients[0].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[0].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${data.hits[1].recipe.image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${data.hits[1].recipe.label}</h5>
          <p class="card-text">"${data.hits[1].recipe.ingredients[1].text}"</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <a href="${data.hits[1].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[2].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[2].recipe.label}</h5>
            <p class="card-text">"${data.hits[2].recipe.ingredients[2].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[2].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[3].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[3].recipe.label}</h5>
            <p class="card-text">"${data.hits[3].recipe.ingredients[3].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[3].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${data.hits[4].recipe.image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${data.hits[4].recipe.label}</h5>
          <p class="card-text">"${data.hits[4].recipe.ingredients[4].text}"</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <a href="${data.hits[4].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[5].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[5].recipe.label}</h5>
            <p class="card-text">"${data.hits[5].recipe.ingredients[5].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[5].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[6].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[6].recipe.label}</h5>
            <p class="card-text">"${data.hits[6].recipe.ingredients[6].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[6].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${data.hits[7].recipe.image}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${data.hits[7].recipe.label}</h5>
          <p class="card-text">"${data.hits[7].recipe.ingredients[1].text}"</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <a href="${data.hits[7].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src="${data.hits[2].recipe.image}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.hits[2].recipe.label}</h5>
            <p class="card-text">"${data.hits[2].recipe.ingredients[2].text}"</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a href="${data.hits[2].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    `
}