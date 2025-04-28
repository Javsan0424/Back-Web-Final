import express from 'express';
import cors from 'cors';
import accountRoutes from './src/routes/account'

const app = express();
app.use(cors())
app.use(express.json());

const port = 3001;

app.use("/", accountRoutes );

app.listen(port, () => {
    console.log("server running");
});