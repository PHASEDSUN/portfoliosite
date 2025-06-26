export default {
  async fetch(request) {
    var RedirectURLs = {
  "urls" : [
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/hello%20world%20mspfa%20banner%201.gif" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/hello%20world%20mspfa%20banner%202.gif" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/hello%20world%20collab%20banner%201.png" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/hello%20world%20collab%20banner%202.png" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/hello%20world%20collab%20banner%203.png" }
  ]
}


// Count the number of URLs in list.
var Groups = RedirectURLs.urls.length;
var rndIndex = null;

function GetRandomNumber(Groups) {
    rndIndex = Math.floor((Math.random() * Groups));
    return rndIndex;
  }
  
// Randomize number and get the corresponding index for the URL in list.
var gotoUrl = RedirectURLs.urls[GetRandomNumber(Groups)].url

console.log(gotoUrl)
console.log(rndIndex)

    const statusCode = 302;
    return Response.redirect(gotoUrl, statusCode);
  },
};
