const express = require('express');

const app = express();

app.use(express.static("./dist/animalic"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: 'dist/animalic/'});
});

app.listen(process.env.PORT || 8080);