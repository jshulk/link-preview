var restify = require("restify"),
    crawler = require("./crawler"),
    server = restify.createServer({
      name: "link-preview"
    });

server.get("/api/preview", function handFetch(req, res, next){
  crawler.fetch("http://www.emarketer.com/")
  .then(function(response){
    res.send(response);
    return next();
  })
  .catch(function(){
    res.send("Error occurred");
    return next();
  })

});

server.listen(3000, function listenCallback(){
  console.log("Server Started");
})
