import { Router } from 'express';
import lineas_carritoController from '../controllers/lineas_carritoController';

class Lineas_carritoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', lineas_carritoController.list);
        //this.router.get('/:id', lineas_carritoController.getOne);
        this.router.post('/', lineas_carritoController.create);
        this.router.put('/:id', lineas_carritoController.update);
        this.router.delete('/:id', lineas_carritoController.deleteProducto);
        this.router.delete('/usuario/:id', lineas_carritoController.deleteLinesFromUser);
    }
}

const lineascarrito = new Lineas_carritoRoutes();
export default lineascarrito.router;
