var RedirectURLs = {
  "urls" : [
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/2023-07-19%2017_33_56-Untitled%20-%20Paint.png" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/2023-07-20%2002_38_08-Untitled%20-%20Paint.png" },
    { "url" : "https://raw.githubusercontent.com/PHASEDSUN/the-abyss/refs/heads/main/EXTRAS/2024-12-13%2019_29_34-Window.png" }
  ]
}


// Count the number of URLs in list.
var Groups = RedirectURLs.urls.length;


function GetRandomNumber(Groups) {
  // Has cookie been set?
  var rndIndex = null;
    // No, set random value to cookie.
    rndIndex = Math.floor((Math.random() * Groups));
    return rndIndex;
  }
  
// Randomize number and get the corresponding index for the URL in list.
var gotoUrl = RedirectURLs.urls[GetRandomNumber(Groups)].url


export default {
  async fetch(request) {
    const destinationURL = gotoUrl;
    const statusCode = 302;
    return Response.redirect(destinationURL, statusCode);
  },
};
