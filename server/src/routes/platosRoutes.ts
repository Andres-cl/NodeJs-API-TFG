import { Router } from 'express';
import platosController from '../controllers/platosController';

class PlatosRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', platosController.list);
        this.router.get('/:id', platosController.getOne);
        this.router.post('/', platosController.create);
        this.router.delete('/:id', platosController.delete);
        this.router.put('/:id', platosController.update);
        this.router.get('/tipoplato/:id',platosController.listTipos);
    }
}

const platosRoutes = new PlatosRoutes();
export default platosRoutes.router;
