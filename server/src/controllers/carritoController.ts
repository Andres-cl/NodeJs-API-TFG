import pool from '../database';
import { Request, Response } from 'express';

class CarritoController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const carrito = await pool.then((r: any) => r.query('SELECT * FROM pedidos WHERE usuarioid = ?', [id]));
        if (carrito.length > 0)
        {
            return res.json(carrito[0]);
        }else{
            return res.status(404).json({text: 'El usuario no tiene carrito'});
        }

    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO carrito set ?',[req.body]));
        res.json({message: 'carrito guardado'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM carrito WHERE usuarioid = ?',[id]));
        res.json({message: 'El carrito ha sido eliminado'});
    }
    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const pedidos = await pool.then((r:any) =>
            r.query('select * from carrito', [id]));
        if (pedidos.length === 0)
            res.json({message: 'No hay carritos'});
        else
            res.json(pedidos);
    }

}

const carritoController = new CarritoController();
export default carritoController;
