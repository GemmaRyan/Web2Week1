import express, {Application, Request, Response} from "express" ;
import morgan from "morgan";
import userRoutes from './routes/users';

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "Hello Una - Gemma ",
    });
});

app.use(morgan("tiny"));


app.use('/api/v1/users', userRoutes)
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });
app.get('/tequila', async (_req : Request, res: Response) => 
    res.send('Tequila time!'));
