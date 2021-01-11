import { Router } from 'express';
import direccionesController from '../controllers/direccionesController';

class DireccionesRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', direccionesController.list);
        this.router.get('/direccion/:id', direccionesController.getOne);
        this.router.post('/', direccionesController.create);
        this.router.delete('/:id', direccionesController.delete);
        this.router.put('/:id', direccionesController.update);
    }
}

const direccionesRoutes = new DireccionesRoutes();
export default direccionesRoutes.router;
