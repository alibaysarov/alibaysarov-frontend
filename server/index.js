import express from 'express';
import fs  from 'fs';
import cors from 'cors';
const app=express()
app.use(cors())
app.use(express.json())
const PORT=5000
app.get('/posts',async(req,res)=>{
    try {
        fs.readFile('data.json','utf-8',(err,data)=>{
            const result=JSON.parse(data)
            // console.log(result);
            res.status(200).json(result)
        })
    } catch (err) {
        res.status(500).json(err)
    }
})
app.listen(PORT,()=>{
     console.log('server started');
})