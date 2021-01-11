import { Router } from 'express';
import lineasPlanSemanalController from '../controllers/lineasPlanSemanalController';

class LineasPlanSemanalRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', lineasPlanSemanalController.list);
        this.router.post('/', lineasPlanSemanalController.create);
    }
}

const li = new LineasPlanSemanalRoutes();
export default li.router;
