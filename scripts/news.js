/* global axios */

let APIKEY = "d868f89e50334512a67d3922bf493da0"

function testNewsAPI()
{
    axios.get("https://newsapi.org/v2/everything?qInTitle=%22amazon+rainforest+fires%22&sortBy=relavancy&pageSize=10&apiKey=" + APIKEY)
        .then(function(response){
            console.log(response)
        })
}