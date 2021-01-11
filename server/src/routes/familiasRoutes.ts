import { Router } from 'express';
import familiasController from '../controllers/familiasController';

class FamiliasRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', familiasController.list);
        this.router.get('/:id', familiasController.getOne);
        this.router.post('/', familiasController.create);
        this.router.delete('/:id', familiasController.delete);
        this.router.put('/:id', familiasController.update);
    }
}

const familiasRoutes = new FamiliasRoutes();
export default familiasRoutes.router;
