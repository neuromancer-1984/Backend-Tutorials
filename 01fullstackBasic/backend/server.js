import express from 'express';

const app = express()
const port = process.env.PORT || 3000
app.use(express.static('dist'))
// app.get('/', (req, res)=>{
//     res.send("")
// })

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Why don't skeletons fight?",
            content: "Because they don’t have the guts!"
        },
        {
            id: 2,
            title: "Parallel lines",
            content: "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "Why can’t your nose be 12 inches long?",
            content: "Because then it would be a foot!"
        },
        {
            id: 5,
            title: "Why did the math book look sad?",
            content: "Because it had too many problems."
        }
    ];
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`Listening at port:${port}`);
})