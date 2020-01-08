/* global axios */
/* global $ */

let APIKEY = "d868f89e50334512a67d3922bf493da0";

// testing the API
// function testNewsAPI()
// {
//     axios.get("https://newsapi.org/v2/everything?qInTitle=%22amazon+rainforest%22&sortBy=relavancy&pageSize=6&apiKey=" + APIKEY)
//         .then(function(response){
//             console.log(response)
//         })
// }


// this API call will only show results specifically about the Amazon rainforest fires
// as the date is not specified in the parameters, the results will be updated automatically when more news is added into the newsAPI website

function getNews() {
    axios.get("https://newsapi.org/v2/everything?qInTitle=%22amazon+rainforest%22&sortBy=relavancy&pageSize=6&apiKey=" + APIKEY)
        .then(function(response) {
            let results = response.data.articles;
            for (let each_result of results) {
                let card = `
                    <div class="card" style="width: 18rem;">
                      <div class="card-body">
                        <h4 class="card-title">${each_result.title}</h4>
                        <p class="card-text">${each_result.description}</p>
                        <a href="${each_result.url}" class = "read-more" target="_blank"><p>[Read the full article]</p></a>
                        <img src="${each_result.urlToImage}" class="card-img-top" alt="Image not found" onerror="this.onerror=null;this.src='images/fire.jpg';">
                      </div>
                    </div>
                    `
                $("#news").append($(card));
            }
        });

}

getNews();