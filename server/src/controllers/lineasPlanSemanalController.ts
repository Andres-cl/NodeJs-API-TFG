import { Request, Response } from 'express';
import pool from '../database';

class LineasPlanSemanalController {

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const lineasPlan = await pool.then((r:any) =>
            r.query('select * from lineasPlanSemanal where semanalid = ?', [id]));
        if (lineasPlan.length === 0)
            res.json({message: 'No hay lineas para dicho plan'});
        else
            res.json(lineasPlan);
    }
    public async create (req:Request, res: Response) {

        await pool.then((r: any) => r.query('INSERT INTO lineasPlanSemanal set ?',[req.body]));
        res.json({message: 'Linea de plan semanal guardada'});
    }
}
const lineasPlanSemanalController = new LineasPlanSemanalController();
export default lineasPlanSemanalController;
