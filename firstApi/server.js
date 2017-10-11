var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id":"34237",
        "text":"Eggs"
    },
    {
        "id":"34234",
        "text":"Milk"
    },
    {
        "id":"34239",
        "text":"Bacon"
    },
    {
        "id":"34231",
        "text":"Frog Legs"
    },
];

app.get('/ingredients', function(req, res){
    res.send(ingredients);
});

app.post('/ingredients', function(req,res){
    var ingredient = req.body;
     if(!ingredient || ingredient.text === ""){
         res.status(400).send({error: "Your ingredient must have a text"});
     } else {
         
         ingredients.push(ingredient);
         res.status(200).send(ingredients);
     }
});


app.delete('/ingredients/:ingredientId', function(req,res){
    var objectFound = false;

    for (var x = 0; x < ingredients.length; x++ ){
        var ing = ingredients[x];

        if (ing.id === req.params.ingredientId){
           
            ingredients.splice(0);
            objectFound = true;
            break;
        }
    }

    if (!objectFound){
        res.status(404).send({error: "That Id does not exist"});
    } else {
        res.send(ingredients);
    }
});



app.put('/ingredients/:ingredientId', function(req,res){

    // var ingredientId = req.params.ingredientId;
    var newText = req.body.text;

    if (!newText || newText === ""){
        res.status(400).send({error: "You must provide Ingredient text"})
    } else {

        var objectFound = false;

        for (var x = 0; x < ingredients.length; x++ ){
            var ing = ingredients[x];

            if (ing.id === req.params.ingredientId){
                ingredients[x].text = newText;
                objectFound = true;
                break;
            }
        }

        if (!objectFound){
            res.status(404).send({error: "That Id does not exist"});
        } else {
            res.send(ingredients);
        }

    }

});

app.listen(3000, function(){
    console.log("First API running on port 3000!");
});

