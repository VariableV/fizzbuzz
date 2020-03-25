const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

var router = express.Router();
router.get('/fizzbuzz',function(req, res){
    const n = parseInt(req.query.count);
    var result = [];
    for(var i = 1; i <= n; i++){
        var str = "";
        if (i % 3 == 0){
            str += "Fizz";
        }
        if (i % 5 == 0){
            str += "Buzz";
        }
        if (str.length == 0){
            str = i+"";
        }
        result.push(str);
    }
    res.json({ out: result });
});

app.use('/api',router);

app.listen(port, ()=>console.log(`api on ${port}`));