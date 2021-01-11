import { Router } from 'express';
import tuppersalimentosController from '../controllers/tuppersalimentosController';

class TuppersalimentosRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', tuppersalimentosController.list);
        this.router.post('/', tuppersalimentosController.create);
    }
}

const tuppersalimentosRoutes = new TuppersalimentosRoutes();
export default tuppersalimentosRoutes.router;
