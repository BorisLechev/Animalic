const express = require('express');

const app = express();

app.use(express.static("./dist/pets"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: 'dist/pets/'});
});

app.listen(process.env.PORT || 8080);