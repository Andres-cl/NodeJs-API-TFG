"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const direccionesRoutes_1 = __importDefault(require("./routes/direccionesRoutes"));
const platosRoutes_1 = __importDefault(require("./routes/platosRoutes"));
const alimentosRoutes_1 = __importDefault(require("./routes/alimentosRoutes"));
const mensajesRoutes_1 = __importDefault(require("./routes/mensajesRoutes"));
const tuppersRoutes_1 = __importDefault(require("./routes/tuppersRoutes"));
const planSemanalRoutes_1 = __importDefault(require("./routes/planSemanalRoutes"));
const lineasPlanSemanalRoutes_1 = __importDefault(require("./routes/lineasPlanSemanalRoutes"));
const codigosRoutes_1 = __importDefault(require("./routes/codigosRoutes"));
const familiasRoutes_1 = __importDefault(require("./routes/familiasRoutes"));
const tuppersalimentosRoutes_1 = __importDefault(require("./routes/tuppersalimentosRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
const lineas_pedidoRoutes_1 = __importDefault(require("./routes/lineas_pedidoRoutes"));
const direccionRoute_1 = __importDefault(require("./routes/direccionRoute"));
const lineas_carritoRoutes_1 = __importDefault(require("./routes/lineas_carritoRoutes"));
const dietaPersonalRoutes_1 = __importDefault(require("./routes/dietaPersonalRoutes"));
const alimentosIndeseadosRoutes_1 = __importDefault(require("./routes/alimentosIndeseadosRoutes"));
const globalUsersRoutes_1 = __importDefault(require("./routes/globalUsersRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const faqRoutes_1 = __importDefault(require("./routes/faqRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/ff/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/ff/direcciones', direccionesRoutes_1.default);
        this.app.use('/api/ff/direccion', direccionRoute_1.default);
        this.app.use('/api/ff/pedidos', pedidosRoutes_1.default);
        this.app.use('/api/ff/mensajes', mensajesRoutes_1.default);
        this.app.use('/api/ff/platos', platosRoutes_1.default);
        this.app.use('/api/ff/alimentos', alimentosRoutes_1.default);
        this.app.use('/api/ff/tuppers', tuppersRoutes_1.default);
        this.app.use('/api/ff/familias', familiasRoutes_1.default);
        this.app.use('/api/ff/tuppersalimentos', tuppersalimentosRoutes_1.default);
        this.app.use('/api/ff/lineas_pedido', lineas_pedidoRoutes_1.default);
        this.app.use('/api/ff/lineas_carrito', lineas_carritoRoutes_1.default);
        this.app.use('/api/ff/faq', faqRoutes_1.default);
        this.app.use('/api/ff/codigospromocionales', codigosRoutes_1.default);
        this.app.use('/api/ff/dietaPersonal', dietaPersonalRoutes_1.default);
        this.app.use('/api/ff/dietaPersonal/alimentosIndeseados', alimentosIndeseadosRoutes_1.default);
        this.app.use('/api/ff/planSemanal', planSemanalRoutes_1.default);
        this.app.use('/api/ff/planSemanal/lineasPlan', lineasPlanSemanalRoutes_1.default);
        this.app.use('/api/ff/globalUsers', globalUsersRoutes_1.default);
        //this.app.use('/api/ff/usuarios/carrito/',carrito);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
