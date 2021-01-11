import { Request, Response } from 'express';
import pool from '../database';

class PedidosController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.then((r: any) => r.query('SELECT * FROM pedidos WHERE ref_pedido = ?', [id]));
        if (games.length > 0)
        {
            return res.json(games[0]);
        }
        res.status(404).json({text: 'El pedido no existe'});
    }
    public async create (req:Request, res: Response) {
        const pedido = await pool.then((r: any) => r.query('INSERT INTO pedidos set ?',[req.body]));
        res.json({message: 'pedido guardado', pedido});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM pedidos WHERE id = ?',[id]));
        res.json({message: 'El usuario ha sido eliminado'});
    }
    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const pedidos = await pool.then((r:any) =>
            r.query('select * from pedidos where usuarioid = ?', [id]));
        if (pedidos.length === 0)
            res.json({message: 'No tiene pedidos ese usuario'});
        else
            res.json(pedidos);
    }

}

const pedidosController = new PedidosController();
export default pedidosController;
