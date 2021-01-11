import globalUsersController from '../controllers/globalUsersController';
import { Router } from 'express';
import usuariosController from "../controllers/usuariosController";

class GlobalUsersRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', globalUsersController.getOne);
        this.router.post('/', globalUsersController.create);
        this.router.delete('/:id', globalUsersController.delete);
        this.router.get('/:user/:pass', globalUsersController.login);
        this.router.get('/', globalUsersController.list);
        this.router.put('/:id', globalUsersController.update);

    }
}

const globalUsers = new GlobalUsersRoutes();
export default globalUsers.router;
