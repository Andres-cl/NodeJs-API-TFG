import { Request, Response } from 'express';
import pool from '../database';

class DietaPersonalController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.then((r: any) => r.query('SELECT * FROM dietaPersonal WHERE id = ?', [id]));
        if (games.length > 0)
        {
            return res.json(games[0]);
        }else {
            return res.status(404).json({text: 'Dieta Personal inexistente'});
        }
    }
    public async list (req: Request, res: Response) {
        const planes = await pool.then((r:any) =>
            r.query('select * from dietaPersonal'));
        res.json(planes);
    }
    public async create (req:Request, res: Response) {
        const dieta = await pool.then((r: any) => r.query('INSERT INTO dietaPersonal set ?',[req.body]));
        res.json({message: 'usuario guardado',dieta});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM dietaPersonal WHERE id = ?',[id]));
        res.json({message: 'La dieta ha sido eliminada'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE dietaPersonal set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'Dieta actualizada'});
    }



}

const dietaPersonalController = new DietaPersonalController();
export default dietaPersonalController;
