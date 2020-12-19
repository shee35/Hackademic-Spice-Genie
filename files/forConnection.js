document.getElementById('searching').addEventListener("click", function(){
    sendAPIRequest();
});

async function sendAPIRequest(){
    var APP_ID = "196ee461";
    var API_KEY = "28a90ed3d4a21ef85469ade6d3894ed1";
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useData(data);
}

function useData(data){
    document.getElementById('container').innerHTML = `
    <div class="card col-3 offset-1" style="width: 18rem;">
  <img class="card-img-top" src="${data.hits[0].recipe.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">"${data.hits[0].recipe.ingredients[0].text}"</p>
    <a href="${data.hits[0].recipe.shareAs}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}