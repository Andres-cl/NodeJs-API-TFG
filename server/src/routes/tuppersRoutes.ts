import { Router } from 'express';
import tuppersController from '../controllers/tuppersController';

class TuppersRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', tuppersController.list);
        this.router.get('/tupper/:id', tuppersController.getOne);
        this.router.get('/:id', tuppersController.listByCreator);
        this.router.post('/', tuppersController.create);
        this.router.delete('/:id', tuppersController.delete);
        this.router.put('/:id', tuppersController.update);
    }
}

const tuppersRoutes = new TuppersRoutes();
export default tuppersRoutes.router;
