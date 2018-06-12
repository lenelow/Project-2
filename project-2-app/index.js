var express = require('express')
var app = express()
app.set("view engine", "hbs")

// app.get('/', function (req, res) {
//   res.send('DoggyDate')
// })

app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  })

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})