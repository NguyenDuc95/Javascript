const express = require('express');
var app = express();
// request to server. go to publicto get data
app.use(express.static("public"));
app.set('view engine', 'ejs');
// view to save 
app.set('views', './view');
app.listen(8080, (err) => {
    if(err) throw err;
    console.log(`Server started on port`);
});

app.get('/', (req, res) => {
    // it will go public (because we set it   default), find tranchu.ejs because enginee is ejs
    res.render("trangchu");
});