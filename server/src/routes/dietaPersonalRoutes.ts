import dietaPersonalController from '../controllers/dietaPersonalController';
import { Router } from 'express';

class DietaPersonalRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', dietaPersonalController.getOne);
        this.router.get('/', dietaPersonalController.list);
        this.router.post('/', dietaPersonalController.create);
        this.router.put('/:id', dietaPersonalController.update);
        this.router.delete('/:id', dietaPersonalController.delete);

    }
}

const dietaPersonal = new DietaPersonalRoutes();
export default dietaPersonal.router;
