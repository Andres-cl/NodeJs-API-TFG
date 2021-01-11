import { Request, Response } from 'express';
import pool from '../database';

class Lineas_pedidoController {

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const lineas_pedido = await pool.then((r:any) =>
            r.query('select * from lineas_pedido where pedidoid = ?', [id]));
        if (lineas_pedido.length === 0)
            res.json({message: 'No tiene lineas dicho pedido'});
        else
            res.json(lineas_pedido);
    }
    public async create (req:Request, res: Response) {

        await pool.then((r: any) => r.query('INSERT INTO lineas_pedido set ?',[req.body]));
        res.json({message: 'Linea Guardada en el pedido'});
    }
}

const lineapedido = new Lineas_pedidoController();
export default lineapedido;
