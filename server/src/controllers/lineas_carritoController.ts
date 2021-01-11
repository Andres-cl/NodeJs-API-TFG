import { Request, Response } from 'express';
import pool from '../database';

class Lineas_carritoController {

    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const lineascarrito = await pool.then((r:any) =>
            r.query('select * from lineas_carrito where usuarioid = ?', [id]));
        if (lineascarrito.length === 0)
            res.json({message: 'No tiene lineas dicho carrito'});
        else
            res.json(lineascarrito);
    }
    public async create (req:Request, res: Response) {
        const linea = await pool.then((r: any) => r.query('INSERT INTO lineas_carrito set ?',[req.body]));
        res.json({message: 'Linea Guardada en el carrito',linea});
    }
    public async deleteProducto (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM lineas_carrito WHERE id = ?',[id]));
        res.json({message: 'la linea ha sido eliminada'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const linea = await pool.then((r: any) => r.query('UPDATE lineas_carrito set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'La linea fue actualizada',linea});
    }
    public async deleteLinesFromUser (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM lineas_carrito WHERE usuarioid = ?',[id]));
        res.json({message: 'las lineas han sido eliminadas'});
    }
}

const lineaCarrito = new Lineas_carritoController();
export default lineaCarrito;
