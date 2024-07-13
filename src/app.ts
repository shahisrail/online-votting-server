import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();
// const port = 3000;

// parser

app.use(express.json());
app.use(cors());

// routes


app.get('/', (req: Request, res: Response) => {
    res.send('online votting server is available');
});

app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
    next();
});

// console.log(process.cwd());
export default app;
