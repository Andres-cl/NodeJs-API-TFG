import { Request, Response } from 'express';
import pool from '../database';

class FamiliasController {

    public async list (req: Request, res: Response) {
        const platos = await pool.then((r:any) =>
            r.query('select * from familia'));
        res.json(platos);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const familias = await pool.then((r: any) => r.query('SELECT * FROM familia WHERE id = ?', [id]));
        if (familias.length > 0)
        {
            return res.json(familias[0]);
        }
        res.status(404).json({text: 'La familia no existe'});
    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO familia set ?',[req.body]));
        res.json({message: 'familia guardada'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM familia WHERE id = ?',[id]));
        res.json({message: 'La familia ha sido eliminada'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE familia set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'La familia ha sido actualizada'});
    }
}
const familiasController = new FamiliasController();
export  default familiasController;
