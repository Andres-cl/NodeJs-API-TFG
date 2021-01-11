import { Request, Response } from 'express';
import pool from '../database';

class FaqController {

    public async list (req: Request, res: Response) {
        const preguntas = await pool.then((r:any) =>
            r.query('select * from faq'));
        res.json(preguntas);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const preguntas = await pool.then((r: any) => r.query('SELECT * FROM faq WHERE id = ?', [id]));
        if (preguntas.length > 0)
        {
            return res.json(preguntas[0]);
        }
        res.status(404).json({text: 'La pregunta no existe'});
    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO faq set ?',[req.body]));
        res.json({message: 'Pregunta Guardada'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM faq WHERE id = ?',[id]));
        res.json({message: 'La pregunta ha sido eliminada'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE faq set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'La pregunta ha sido actualizada'});
    }
}
const faqController = new FaqController();
export  default faqController;
