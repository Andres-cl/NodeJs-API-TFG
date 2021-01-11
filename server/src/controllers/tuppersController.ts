import {Response,Request} from "express";
import pool from '../database';

class TuppersController {

    public async list (req: Request, res: Response) {
        const tuppers = await pool.then((r:any) =>
            r.query('select * from tuppers'));
        res.json(tuppers);
    }

    public async listByCreator (req: Request, res: Response) {
        const { id } = req.params;
        const tuppers = await pool.then((r: any) => r.query('SELECT * FROM tuppers WHERE creador = ? order by id desc', [id]));
        if (tuppers.length > 0)
        {
            return res.json(tuppers[0]);
        }else{
            res.status(404).json({text: 'El tupper no existe'});
        }
    }
    public async create (req:Request, res: Response) {
        const tupper = await pool.then((r: any) => r.query('INSERT INTO tuppers set ?',[req.body]));
        res.json({message: 'tupper guardado', tupper});
    }
    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM tuppers WHERE id = ?',[id]));
        res.json({message: 'El tupper ha sido eliminado'});
    }
    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.then((r: any) => r.query('UPDATE tuppers set ? WHERE id = ?',[req.body, id]));
        res.json({message: 'El tupper fue actualizado'});
    }
    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const tupper = await pool.then((r: any) => r.query('SELECT * FROM tuppers WHERE id = ?', [id]));
        if (tupper.length > 0)
        {
            return res.json(tupper[0]);
        }
        res.status(404).json({text: 'El tupper no existe'});
    }
}
const tuppersController = new TuppersController();
export default tuppersController;
