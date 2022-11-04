import express, {Request, Response} from 'express';
import { type } from 'os';
import { stringify } from 'querystring';
import userModel from '../models/userModel';
import { User } from '../types/User';

let Router = express.Router();

// Router.post('/login', (request: Request, response: Response): void => {
//     console.log(request.body);
//     const {email, password} = request.body;
//     console.log(typeof email, typeof password);
//     if (
//     (typeof email == 'string' && email != '') &&
//     (typeof password == 'string' && password != '')
//     )
//     {
//     } else {
//         response.status(500).json({"msg": "You have to send email and password!"});
//     }
    
//     response.status(200).json('Login page');
// });


Router.post('/register', (request: Request, response: Response): void => {
    console.log(request.body);
    const { email, email_cfg, password, password_cfg } = request.body;
    
    if (
        (typeof email == 'string' && email != '') &&
        (typeof email_cfg == 'string' && email_cfg != '') &&
        (typeof password == 'string' && password != '') &&
        (typeof password_cfg == 'string' && password_cfg != '')

        )
        {
    

            if(email != email_cfg || password != password_cfg){
                response.status(500).json({"msg": "Bad credentials"});

            }

            const user = <User|void >userModel.create({
                email,
                password
            }, (error) => {
                if(error) return response.status(500).json({"msg": "User not created"})

                return response.status(200).json(user)
            });
           
        }
         else {
            response.status(500).json({"msg": "You have to send email and password!"});
        
        }

});

export default Router;