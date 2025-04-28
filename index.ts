import express from 'express';

const app = express();
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello backend");
});

app.listen(port, () => {
    console.log("server running");
});