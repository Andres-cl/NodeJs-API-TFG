import { Router } from 'express';
import faqController from '../controllers/faqController';

class FaqRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', faqController.list);
        this.router.get('/:id', faqController.getOne);
        this.router.post('/', faqController.create);
        this.router.delete('/:id', faqController.delete);
        this.router.put('/:id', faqController.update);
    }
}

const faqRoutes = new FaqRoutes();
export default faqRoutes.router;
