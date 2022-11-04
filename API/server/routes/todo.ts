import express, { Request, Response } from 'express';
import todoModel from '../models/todoModel';

let Router = express.Router();

Router.post('/', async (request:Request,response:Response) =>{
    const {label, description} = request.body
    console.log(label,description)
 
    let newTodo = new todoModel({
        label,
        description
    })
 
    try{
 
        let todo = await newTodo.save()
        return response.status(200).json({"msg": newTodo})
   
 
    } catch (error){
 
        response.status(500).json({"msg": error})
 
    }
   
});

Router.get('/:todoId', (request: Request, response: Response)=> {
    let { todoId } = request.params;

    response.status(200).json({"msg":"List" + todoId + "To do page!"})


});

Router.get('/', (request: Request, response: Response)=> {
    response.status(200).json({"msg":"List To do page!"})


});

Router.delete('/:todoId', (request: Request, response: Response)=> {
    let { todoId } = request.params;
    response.status(200).json({"msg":"Delete " + todoId  + "To do page!"})


});

Router.put('/:todoId', (request: Request, response: Response)=> {
    let { todoId } = request.params;
    response.status(200).json({"msg":"Edit " + todoId  + "To do page!"})


});



export default Router;
