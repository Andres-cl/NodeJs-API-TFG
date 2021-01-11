import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.then((r: any) => r.query('SELECT * FROM alimentosNoDeseados WHERE id = ?', [id]));
        if (games.length > 0)
        {
            return res.json(games[0]);
        }else {
            return res.status(404).json({text: 'El usuario no existe'});
        }
    }
    public async list (req: Request, res: Response) {
        const { id } = req.params;
        const alimentos = await pool.then((r: any) => r.query('SELECT * FROM alimentosNoDeseados WHERE dietaPersonalId = ?', [id]));
        if (alimentos.length > 0)
        {
            return res.json(alimentos);
        }else {
            return res.status(404).json({text: 'No tiene alimentos no deseados dicho plan'});
        }
    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO alimentosNoDeseados set ?',[req.body]));
        res.json({message: 'usuario guardado'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM alimentosNoDeseados WHERE id = ?',[id]));
        res.json({message: 'El usuario ha sido eliminado'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE alimentosNoDeseados set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'usuario actualizado'});
    }

}

const usuariosController = new UsuariosController();
export default usuariosController;
