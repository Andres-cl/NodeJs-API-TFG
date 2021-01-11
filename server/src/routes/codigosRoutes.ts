import { Router } from 'express';
import codigosController from '../controllers/codigosController';

class CodigosRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', codigosController.list);
        this.router.get('/:id', codigosController.getOne);
        this.router.get('/descuento/:id', codigosController.getOneWithDiscount);
        this.router.get('/codigo/:id', codigosController.getOneWithCode);
        this.router.post('/', codigosController.create);
        this.router.delete('/:id', codigosController.delete);
        this.router.put('/:id', codigosController.update);
    }
}

const codigos = new CodigosRoutes();
export default codigos.router;
