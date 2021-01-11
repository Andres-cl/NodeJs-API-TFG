import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import direccionesRoutes from './routes/direccionesRoutes';
import platosRoutes from './routes/platosRoutes';
import alimentosRoutes from './routes/alimentosRoutes';
import mensajesRoutes from './routes/mensajesRoutes';
import tuppersRoutes from './routes/tuppersRoutes';
import planSemanalRoutes from './routes/planSemanalRoutes';
import lineasPlanSemanalRoutes from './routes/lineasPlanSemanalRoutes';
import codigosRoutes from './routes/codigosRoutes';
import familiasRoutes from './routes/familiasRoutes';
import tuppersalimentosRoutes from './routes/tuppersalimentosRoutes';
import pedidosRoutes from './routes/pedidosRoutes';
import lineas_pedido from './routes/lineas_pedidoRoutes';
import direccionRoute from './routes/direccionRoute';
import lineas_carrito from './routes/lineas_carritoRoutes';
import dietaPersonal from './routes/dietaPersonalRoutes';
import alimentosIndeseados from './routes/alimentosIndeseadosRoutes';
import globalUsersRoutes from './routes/globalUsersRoutes';
import morgan from 'morgan';
import cors from 'cors';
import faqRoutes from "./routes/faqRoutes";

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes():void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/ff/usuarios',usuariosRoutes);
        this.app.use('/api/ff/direcciones',direccionesRoutes);
        this.app.use('/api/ff/direccion',direccionRoute);
        this.app.use('/api/ff/pedidos',pedidosRoutes);
        this.app.use('/api/ff/mensajes',mensajesRoutes);
        this.app.use('/api/ff/platos',platosRoutes);
        this.app.use('/api/ff/alimentos',alimentosRoutes);
        this.app.use('/api/ff/tuppers',tuppersRoutes);
        this.app.use('/api/ff/familias',familiasRoutes);
        this.app.use('/api/ff/tuppersalimentos',tuppersalimentosRoutes);
        this.app.use('/api/ff/lineas_pedido',lineas_pedido);
        this.app.use('/api/ff/lineas_carrito',lineas_carrito);
        this.app.use('/api/ff/faq',faqRoutes);
        this.app.use('/api/ff/codigospromocionales',codigosRoutes);
        this.app.use('/api/ff/dietaPersonal',dietaPersonal);
        this.app.use('/api/ff/dietaPersonal/alimentosIndeseados',alimentosIndeseados);
        this.app.use('/api/ff/planSemanal',planSemanalRoutes);
        this.app.use('/api/ff/planSemanal/lineasPlan',lineasPlanSemanalRoutes);
        this.app.use('/api/ff/globalUsers',globalUsersRoutes);
        //this.app.use('/api/ff/usuarios/carrito/',carrito);

    }
    start():void {
        this.app.listen(this.app.get('port'), () => {
        console.log('Server on port', this.app.get('port'));
        })
    }
}
const server = new Server();
server.start();
