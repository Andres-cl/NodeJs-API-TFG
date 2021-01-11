import { Router } from 'express';
import direccionController from '../controllers/direccionController';

class DireccionRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', direccionController.getOne);
    }
}

const direccionRoutes = new DireccionRoutes();
export default direccionRoutes.router;
