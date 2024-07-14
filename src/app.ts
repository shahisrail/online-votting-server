import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { UserRoutes } from './modules/user/user.routes';
import { NormalUserRouter } from './modules/normalUser/nomalUser.route';
import globalErrorHandler from './app/middlwares/golbalErrorhandler';
import notFound from './app/middlwares/notfound';
import router from './app/routes';


const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1",router);


app.get('/', (req: Request, res: Response) => {
    res.send('Online voting server is available');
});

app.use(notFound)
app.use(globalErrorHandler)

export default app;
