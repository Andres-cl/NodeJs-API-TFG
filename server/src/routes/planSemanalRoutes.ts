import planSemanalController from '../controllers/planSemanalController';
import { Router } from 'express';

class PlanSemanalRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', planSemanalController.getOne);
        this.router.post('/', planSemanalController.create);
        //this.router.put('/:id', planSemanalController.update);
        this.router.delete('/:id', planSemanalController.delete);

    }
}

const planSemanal = new PlanSemanalRoutes();
export default planSemanal.router;
