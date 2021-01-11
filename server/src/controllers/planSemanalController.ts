import { Request, Response } from 'express';
import pool from '../database';

class PlanSemanalController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const plan = await pool.then((r: any) => r.query('SELECT * FROM planSemanal WHERE id = ?', [id]));
        if (plan.length > 0)
        {
            return res.json(plan[0]);
        }else {
            return res.status(404).json({text: 'Plan Semanal inexistente'});
        }
    }
    public async create (req:Request, res: Response) {
        const plan = await pool.then((r: any) => r.query('INSERT INTO planSemanal set ?',[req.body]));
        res.json({message: 'plan semanal guardado',plan});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM planSemanal WHERE id = ?',[id]));
        res.json({message: 'El plan semanal ha sido borrado'});
    }




}

const planSemanalController = new PlanSemanalController();
export default planSemanalController;
