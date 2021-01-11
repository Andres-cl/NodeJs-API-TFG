import { Request, Response } from 'express';
import pool from '../database';

class AlimentosController {

    public async list (req: Request, res: Response) {
    const alimentos = await pool.then((r:any) =>
        r.query('select * from alimentos'));
    res.json(alimentos);
}

public async getOne (req: Request, res: Response) {
    const { id } = req.params;
    const alimentos = await pool.then((r: any) => r.query('SELECT * FROM alimentos WHERE id = ?', [id]));
    if (alimentos.length > 0)
    {
        return res.json(alimentos[0]);
    }else {
        res.status(404).json({text: 'El alimento no existe'});
    }
}
public async create (req:Request, res: Response) {
    await pool.then((r: any) => r.query('INSERT INTO alimentos set ?',[req.body]));
    res.json({message: 'alimento guardado'});
}
public async delete (req: Request, res: Response) {
    const { id } = req.params;
    await pool.then((r: any) => r.query('DELETE FROM alimentos WHERE id = ?',[id]));
    res.json({message: 'El alimento ha sido eliminado'});
}
public async update (req: Request, res: Response) {
    const { id } = req.params;
    await pool.then((r: any) => r.query('UPDATE alimentos set ? WHERE id = ?',[req.body, id]));
    res.json({message: 'El alimento fue actualizado'});
}
    public async getCategory (req: Request, res: Response) {
        const {id} = req.params;
        const alimentos = await pool.then((r:any) =>
            r.query('select * from alimentos where tipoalimento = ?',[id]));
        if (alimentos.length > 0)
        {
            return res.json(alimentos);
        }else {
            return res.status(404).json({text: 'El alimento no existe'});
        }
    }
    public async getNombre (req: Request, res: Response) {
        const { id } = req.params;
        const alimentos = await pool.then((r: any) => r.query('SELECT * FROM alimentos WHERE nombre = ?', [id]));
        if (alimentos.length > 0)
        {
            return res.json(alimentos[0]);
        }else {
            res.status(404).json({text: 'El alimento no existe'});
        }
    }
}


const alimentosController = new AlimentosController();
export default alimentosController;
