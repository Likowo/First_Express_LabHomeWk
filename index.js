
const express = require("express");  // Gives file access to express

const app = express(); // Creating an instance of express as app variable //This allows us to use express methods on our app object
const PORT = 3001 ;
const response = require("./models/response")
//Setting up Midddleware( purpose: This gives access to views folder. First run the command; npm i express-react-views in the terminal : This dependency will auto fill package.json under dependencies )
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

//Define a "root" route directly on app called greetings // Mount routes
app.get('/greeting', function(req, res) {
    res.send('<h1> Hello Li </h1>');
  });

  //Give the greeting route a param, /:name
app.get('/greeting/:name', function(req, res) {
    res.send(` woow! Hello ${req.params.name} , "It's so great to see you!"`);
  });

  //Tip Calculator route and params
    // Define a route called tip
    app.get('/tip', function(req, res) {
      res.send('<h1> Hello Li, your tip is </h1>');
    });

    // Give the tip route 2 params, /:total and /:tipPercentage
  app.get('/tip/:total/:tipPercentage', function(req, res) {
    let tip = req.params.total * (req.params.tipPercentage / 100)
    res.send (`<h1> Hi Likowo, your tip is ${tip} dollars </h1>`)
  });
  

  // Magic 8 Ball route
  // Define a route called /magic
// app.get('/magic', function(req, res) {
//   res.send(<h1> This is the Magic 8 Ball! Are you ready??! </h1>);
// });

//
app.get('/magic/:question', (req, res) =>{
  let randomResponse = response[Math.floor(Math.random() * response.length)]
  res.send(`${req.params.question} <h1>${randomResponse}</h1>`)
})




app.listen(PORT,(req,res) => {
    console.log(`Server is running on port${PORT}`)
})                                                 //Always keep this at the bottom of your file