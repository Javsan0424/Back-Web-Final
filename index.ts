import express from 'express';
import accountRoutes from './src/routes/account'

const app = express();
app.use(express.json());

const port = 3001;

app.use("/", accountRoutes );

app.listen(port, () => {
    console.log("server running");
});