import { Request, Response } from 'express';
import pool from '../database';

class TuppersAlimentosController {

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const idalimentos = await pool.then((r:any) =>
            r.query('select * from tuppers_alimentos where tupperId = ?', [id]));
        if (idalimentos.length === 0)
            res.json({message: 'No hay alimentos para dicho tupper'});
        else
            res.json(idalimentos);
    }
    public async create (req:Request, res: Response) {

        await pool.then((r: any) => r.query('INSERT INTO tuppers_alimentos set ?',[req.body]));
        res.json({message: 'tupper-alimento guardado'});
    }
}
const tuppersalimentosController = new TuppersAlimentosController();
export default tuppersalimentosController;
