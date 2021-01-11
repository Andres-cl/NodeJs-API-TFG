import { Request, Response } from 'express';
import pool from '../database';

class PedidosController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const codigos = await pool.then((r: any) => r.query('SELECT * FROM codigosPromocionales WHERE id = ?', [id]));
        if (codigos.length > 0)
        {
            return res.json(codigos[0]);
        }
        res.status(404).json({text: 'El codigo no existe'});
    }
    public async getOneWithDiscount (req: Request, res: Response) {
        const { id } = req.params;
        const codigos = await pool.then((r: any) => r.query('SELECT * FROM codigosPromocionales WHERE descuento = ?', [id]));
        if (codigos.length > 0)
        {
            return res.json(codigos[0]);
        }
        res.status(404).json({text: 'El codigo no existe'});
    }
    public async getOneWithCode (req: Request, res: Response) {
        const { id } = req.params;
        const codigos = await pool.then((r: any) => r.query('SELECT * FROM codigosPromocionales WHERE codigo = ?', [id]));
        if (codigos.length > 0)
        {
            return res.json(codigos[0]);
        }
        res.status(404).json({text: 'El codigo no existe'});
    }
    public async create (req:Request, res: Response) {
         await pool.then((r: any) => r.query('INSERT INTO codigosPromocionales set ?',[req.body]));
        res.json({message: 'codigo guardado'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM codigosPromocionales WHERE id = ?',[id]));
        res.json({message: 'El codigo ha sido eliminado'});
    }
    public async list (req: Request, res: Response) {

        const codigos = await pool.then((r:any) =>
            r.query('select * from codigosPromocionales'));
        if (codigos.length === 0)
            res.json({message: 'No hay códigos promocionales'});
        else
            res.json(codigos);
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE codigosPromocionales set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'El codigo fue actualizado'});
    }

}

const pedidosController = new PedidosController();
export default pedidosController;
