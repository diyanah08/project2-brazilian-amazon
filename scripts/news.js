/* global axios */
/* global $ */

let APIKEY = "d868f89e50334512a67d3922bf493da0"

// function testNewsAPI()
// {
//     axios.get("https://newsapi.org/v2/everything?qInTitle=%22amazon+rainforest+fires%22&sortBy=relavancy&pageSize=10&apiKey=" + APIKEY)
//         .then(function(response){
//             console.log(response)
//         })
// }


// this API call will only show results specifically about the Amazon rainforest fires
// as the date is not specified in the parameters, the results will be updated automatically when more news is added into the newsAPI website

function getNews()
{
    axios.get("https://newsapi.org/v2/everything?qInTitle=%22amazon+rainforest+fires%22&sortBy=relavancy&pageSize=10&apiKey=" + APIKEY)
        .then(function(response){
            let results = response.data.articles;
                for (let each_result of results) {
                    let card = `
                    <div class="media mt-3 mb-3">
                      <img src="${each_result.urlToImage}" class="mr-3 img-thumbnail" style="width:25%">
                      <div class="media-body">
                        <h6 class="mt-0">${each_result.title}</h6>
                        <p class="mt-0 article-text">${each_result.description}</p>
                        <a href="${each_result.url}" target="_blank">[Read the full article]</a>
                      </div>
                    </div>
                    `
                    $("#news").append($(card));
                }
        })
    
}

getNews()