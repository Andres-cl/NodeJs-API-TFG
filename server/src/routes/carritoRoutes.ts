import { Router } from 'express';
import carritoController from '../controllers/carritoController';

class CarritoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', carritoController.list);
        this.router.get('/:id', carritoController.getOne);
        this.router.post('/', carritoController.create);
        this.router.delete('/:id', carritoController.delete);
    }
}

const carritoRoute = new CarritoRoutes();
export default carritoRoute.router;
