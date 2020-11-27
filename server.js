const express = require("express");
const pokemon = express();
const arg = process.argv.slice(2)
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use('/pokemons', routes);
app.use(bodyParser.json());
pokemon.get("/", function (request, response) {
    return response.send("Hello World !");
});
pokemon.listen(arg[0], function() {
  console.log(
    "The server has started on localhost:"+ arg[0]
  );
});
