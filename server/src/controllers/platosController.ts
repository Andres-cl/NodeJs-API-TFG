import { Request, Response } from 'express';
import pool from '../database';

class PlatosController {

    public async list (req: Request, res: Response) {
        const platos = await pool.then((r:any) =>
            r.query('select * from platos'));
        res.json(platos);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const platos = await pool.then((r: any) => r.query('SELECT * FROM platos WHERE id = ?', [id]));
        if (platos.length > 0)
        {
            return res.json(platos[0]);
        }
        res.status(404).json({text: 'El plato no existe'});
    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO platos set ?',[req.body]));
        res.json({message: 'plato guardado'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM platos WHERE id = ?',[id]));
        res.json({message: 'El plato ha sido eliminado'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE platos set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'El plato fue actualizado'});
    }
    public async listTipos (req: Request, res: Response) {
        const {id} = req.params;
        const platos = await pool.then((r:any) =>
            r.query('select * from platos where tipoplato = ?', [id]));
        if (platos.length > 0)
        {
            return res.json(platos);
        }else {
            res.status(404).json({text: 'No hay platos en dicha categoria'});
        }
    }

}

const platosController = new PlatosController();
export default platosController;
