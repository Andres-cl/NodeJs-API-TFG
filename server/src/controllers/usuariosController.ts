import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

    public async list (req: Request, res: Response) {
        const tuppers = await pool.then((r:any) =>
            r.query('select * from usuarios'));
        res.json(tuppers);
    }
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const games = await pool.then((r: any) => r.query('SELECT * FROM usuarios WHERE id = ?', [id]));
        if (games.length > 0)
        {
            return res.json(games[0]);
        }else {
            return res.status(404).json({text: 'El usuario no existe'});
        }
    }
    public async create (req:Request, res: Response) {
        await pool.then((r: any) => r.query('INSERT INTO usuarios set ?',[req.body]));
        res.json({message: 'usuario guardado'});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM usuarios WHERE id = ?',[id]));
        res.json({message: 'El usuario ha sido eliminado'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE usuarios set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'usuario actualizado'});
    }
    public async login (req: Request, res: Response){
        const { user } = req.params;
        const { pass } = req.params;
        const usuario = await pool.then((r:any) => r.query('select * from usuarios where correo = ? and contrasenya = ?',[user, pass]));
        if (usuario.length > 0)
        {
            return res.json(usuario[0]);
        }else{
            return res.status(404).json({text: 'El usuario no existe'});
        }
    }
    public async emailExists(req: Request, res: Response){
        const {user} = req.params;
        const usuario = await pool.then((r:any) => r.query('select * from usuarios where correo = ?' ,[user]));
        if (usuario.length > 0)
        {
            return res.json(usuario[0]);
        }else{
            return res.status(404).json({text: 'El correo esta libre'});
        }
    }

}

const usuariosController = new UsuariosController();
export default usuariosController;
