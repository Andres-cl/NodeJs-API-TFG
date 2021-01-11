import alimentosIndeseadosController from '../controllers/alimentosIndeseadosController';
import { Router } from 'express';

class AlimentosIndeseadosRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', alimentosIndeseadosController.getOne);
        this.router.get('/dieta/:id', alimentosIndeseadosController.list);
        this.router.post('/', alimentosIndeseadosController.create);
        this.router.put('/:id', alimentosIndeseadosController.update);
        this.router.delete('/:id', alimentosIndeseadosController.delete);

    }
}

const alimentosIndeseados = new AlimentosIndeseadosRoutes();
export default alimentosIndeseados.router;
