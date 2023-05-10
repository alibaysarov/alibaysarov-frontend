import express from 'express';
import fs  from 'fs';
import cors from 'cors';
const app=express()
// import data from './data.json';
app.use(cors({
    origin:'*'
}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
})
app.use(express.json())
const PORT=5000
// console.log(data);
const data=JSON.parse("[\r\n\t{\r\n\t\t\"title\": \"Eat Right For Your Exercise Regime\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Lifestyle\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-1.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-1@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"The Look: Perfect Balance\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Lifestyle\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-2.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-2@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"Fun Things to Do in Rome\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Style\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-3.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-3@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"24 Colorful Ceilings That Add Unexpected Contrast to Any Room\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Style\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-4.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-4@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"9 New Songs to Heat Up Your Fall Playlist\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Lifestyle\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-5.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-5@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"What You Need on Your Bedside Table\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Events\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-6.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-6@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"When Two Wheels Are Better Than Four\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Travel\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-7.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-7@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"26 Living Room Ideas from the Homes of Top Designers\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Travel\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-8.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-8@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t},\r\n\t{\r\n\t\t\"title\": \"What Makes Your City’s Style Unique\",\r\n\t\t\"text\": \"Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…\",\r\n\t\t\"tags\": \"Music\",\r\n\t\t\"autor\": \"Nick Bove\",\r\n\t\t\"img\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-9.jpg\",\r\n\t\t\"img_2x\": \"https://cloud.codesupply.co/endpoint/react/images/post-img-9@2x.jpg\",\r\n\t\t\"date\": \"April 8, 2018\",\r\n\t\t\"views\": \"3K\"\r\n\t}\r\n]")
app.get('/posts',async(req,res)=>{
    try {
        res.setHeader('Access-Control-Allow-Origin', 'https://alibaysarov-frontend.vercel.app')
        res.status(200).json(data)
         
    } catch (err) {
        res.status(500).json(err)
    }
})
app.listen(PORT,()=>{
     console.log('server started');
})