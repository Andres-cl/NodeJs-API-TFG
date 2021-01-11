import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.send('API is in /api/ff')
    }
}
export const indexController = new IndexController();
