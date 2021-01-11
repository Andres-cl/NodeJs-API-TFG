import { Request, Response } from 'express';
import pool from '../database';

class DireccionesController {

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const direcciones = await pool.then((r:any) =>
            r.query('select * from direcciones where usuarioid = ?', [id]));
        if (direcciones.length === 0)
            res.json({message: 'No tiene direcciones ese usuario'});
        else
        res.json(direcciones);
    }
    public async create (req:Request, res: Response) {

        await pool.then((r: any) => r.query('INSERT INTO direcciones set ?',[req.body]));
        res.json({message: 'direccion guardada'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM direcciones WHERE id = ?',[id]));
        res.json({message: 'La direccion ha sido eliminada'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE direcciones set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'Direccion actualizada'});
    }
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const direccion = await pool.then((r: any) => r.query('select * from direcciones WHERE id = ?',[id]));
        if (direccion.length === 0)
            res.json({message: 'No Existe la direccion buscada'});
        else
            res.json(direccion);
    }

}

const direccionesController = new DireccionesController();
export default direccionesController;
