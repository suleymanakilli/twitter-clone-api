
const express=require('express')
const app=express()
const Twitter =require('./api/helpers/twitter');
const twitter=new Twitter();
const port=3000

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json());
app.get('/tweets',(req,res)=>{
    const query = req.query.q;
    const resultType = req.query.result_type;
    const maxId = req.query.max_id;
    twitter.get(query, resultType, maxId).then((response)=>{
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(400).send(error);
    });
    
})

app.listen(port,()=>console.log(`Twitter API listening on port ${port}!`))
