import { Router } from 'express';
import mensajesController from '../controllers/mensajesController';

class MensajesRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', mensajesController.list);
        this.router.post('/', mensajesController.create);
    }
}

const mensajesRoutes = new MensajesRoutes();
export default mensajesRoutes.router;
