import { Request, Response } from 'express';
import pool from '../database';

class MensajesController{

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const mensajes = await pool.then((r:any) =>
            r.query('select * from mensajes where usuarioid = ?', [id]));
        if (mensajes.length === 0)
            res.json({message: 'No tiene mensajes ese usuario'});
        else
            res.json(mensajes);
    }
    public async create (req:Request, res: Response) {

        await pool.then((r: any) => r.query('INSERT INTO mensajes set ?',[req.body]));
        res.json({message: 'mensaje guardado'});
    }
}
const mensajesControler = new MensajesController();
export default mensajesControler;
