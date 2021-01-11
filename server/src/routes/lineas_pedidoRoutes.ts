import { Router } from 'express';
import lineas_pedidoController from '../controllers/lineas_pedidoController';

class Lineas_pedidoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', lineas_pedidoController.list);
        //this.router.get('/:id', lineas_pedidoController.getOne);
        this.router.post('/', lineas_pedidoController.create);
        //todo IMPLEMENTAR ESTO
        //this.router.delete('/:id', lineas_pedidoController.delete);
    }
}

const lineaspedido = new Lineas_pedidoRoutes();
export default lineaspedido.router;
