const express = require('express');


const app = express();

app.use((req, res, next) => {
    console.log("in the middleware");
    next();
});

app.use((req, res, next) => {
    res.send("<h1>Hello From Express.</h1>");
});

app.listen(3000);