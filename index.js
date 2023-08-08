const express = require("express");  // Gives file access to express

const app = express(); // Creating an instance of express as app variable //This allows us to use express methods on our app object
const PORT = 3001 ;

//Setting up Midddleware( purpose: This gives access to views folder. First run the command; npm i express-react-views in the terminal : This dependency will auto fill package.json under dependencies )
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

//Define a "root" route directly on app // Mount routes
app.get('/greeting', function(req, res) {
    res.send('<h1> Hello Li </h1>');
  });

  //Give the greeting route a param, /:name
app.get('/greeting/:name', function(req, res) {
    res.send(` woow! Hello ${req.params.name} , "It's so great to see you!"`);
  });





app.listen(PORT,(req,res) => {
    console.log(`Server is running on port${PORT}`)
})                                                 //Always keep this at the bottom of your file