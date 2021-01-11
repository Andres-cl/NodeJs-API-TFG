import { Router } from 'express';
import alimentosController from '../controllers/alimentosController';

class AlimentosRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', alimentosController.list);
        this.router.get('/:id', alimentosController.getOne);
        this.router.post('/', alimentosController.create);
        this.router.delete('/:id', alimentosController.delete);
        this.router.put('/:id', alimentosController.update);
        this.router.get('/categoria/:id', alimentosController.getCategory);
        this.router.get('/nombre/:id', alimentosController.getNombre);
    }
}

const alimentosRoutes = new AlimentosRoutes();
export default alimentosRoutes.router;
