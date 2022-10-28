import express, {Request, response, Response} from 'express';

let Router = express.Router();

Router.post('/login', (request: Request, response: Response) => {
console.log(request.body);

     response.status(200).send('Login Page')
});

export default Router;