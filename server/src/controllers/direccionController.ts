import { Request, Response } from 'express';
import pool from '../database';

class DireccionController {
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const direccion = await pool.then((r: any) => r.query('select * from direcciones WHERE id = ?',[id]));
        if (direccion.length > 0)
            res.json(direccion[0]);
        else
            res.json({message: 'No Existe la direccion buscada'});
    }
}

const direccionController = new DireccionController();
export default direccionController;
