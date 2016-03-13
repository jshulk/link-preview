var _ = require("lodash"),
  Crawler = require("simplecrawler");

module.exports = {

  fetch: function(url){
    var crawler = this.createCrawler(url);
    console.log('crawler', crawler);
    var promise = new Promise(function(resolve, reject){
        crawler.on('fetchcomplete', function(queueItem, responseBody, response){
            console.log("response body");
            console.log(responseBody);
            resolve(responseBody);
        });
        crawler.on('fetcherror', function(){
          console.log('crawler error occurred');
          reject("error occurred");
        });
        crawler.start();
    });

    return promise;
  },
  createCrawler: function(url){
    var crawler = new Crawler(url);
    crawler.maxDepth = 1;
    crawler.decodeResponses = true;
    return crawler;
  }
}
