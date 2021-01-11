import { Request, Response } from 'express';
import pool from '../database';

class GlobalUsersController {

    public async list (req: Request, res: Response) {
        const tuppers = await pool.then((r:any) =>
            r.query('select * from globalUsers'));
        res.json(tuppers);
    }
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.then((r: any) => r.query('SELECT * FROM globalUsers WHERE id = ?', [id]));
        if (games.length > 0)
        {
            return res.json(games[0]);
        }else {
            return res.status(404).json({text: 'El usuario no existe'});
        }
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE globalUsers set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'usuario actualizado'});
    }
    public async create (req:Request, res: Response) {
        const user = await pool.then((r: any) => r.query('INSERT INTO globalUsers set ?',[req.body]));
        res.json({message: 'usuario guardado', user});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM globalUsers WHERE id = ?',[id]));
        res.json({message: 'El usuario ha sido eliminado'});
    }
    public async login (req: Request, res: Response){
        const { user } = req.params;
        const { pass } = req.params;
        const usuario = await pool.then((r:any) => r.query('select * from globalUsers where usuario = ? and password = ?',[user, pass]));
        if (usuario.length > 0)
        {
            return res.json(usuario[0]);
        }else{
            return res.status(404).json({text: 'El usuario no existe'});
        }
    }


}

const globalUsuariosController = new GlobalUsersController();
export default globalUsuariosController;
