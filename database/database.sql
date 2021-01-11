-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-01-2021 a las 10:37:52
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ffcompany`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimentos`
--

CREATE TABLE `alimentos` (
  `id` int(11) NOT NULL,
  `precio` float DEFAULT NULL,
  `foto` varchar(250) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `proteinas` int(5) DEFAULT NULL,
  `grasas` int(5) DEFAULT NULL,
  `hidratos` int(5) DEFAULT NULL,
  `calorias` float DEFAULT NULL,
  `tipoalimento` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alimentos`
--

INSERT INTO `alimentos` (`id`, `precio`, `foto`, `nombre`, `proteinas`, `grasas`, `hidratos`, `calorias`, `tipoalimento`) VALUES
(1, 1, 'https://www.foodretail.es/2016/07/12/food/Macarrones-MDD-pasta-consumen-espanoles_1016908303_48369_660x372.jpg', 'Macarrones', 13, 2, 71, 363, 'Carbohidratos'),
(2, 2.5, 'https://s6.eestatic.com/2017/03/22/cocinillas/Cocinillas_202742538_116311033_1706x960.jpg', 'Carne picada', 17, 12, 1, 172, 'Proteinas'),
(3, 2.5, 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/L/La%20mejor%20manera%20de%20hacer%20filetes%20de%20salm%C3%B3n1.jpg', 'Salmón', 18, 12, 0, 182, 'Proteinas'),
(4, 3, 'https://www.recetin.com/wp-content/uploads/2013/07/arroz.jpg', 'arroz', 6, 1, 81, 366, 'Carbohidratos'),
(5, 0.5, 'https://st.depositphotos.com/1772880/1328/i/450/depositphotos_13280226-stock-photo-cauliflower.jpg', 'Coliflor', 2, 0, 2, 25, 'Verduras'),
(6, 0.5, 'https://www.gastronomiavasca.net/uploads/image/file/3331/w700_calabacin.jpg', 'Calabacín', 1, 0, 3, 16, 'Verduras'),
(7, 2, 'https://images.squarespace-cdn.com/content/561718ebe4b062a227c4fcf2/1494519498313-WJXWZ3VI0QORPH8YXGCY/?content-type=image%2Fjpeg', 'Pechuga de pollo', 20, 3, 0, 113, 'Proteinas'),
(8, 1.5, 'https://www.agrodataperu.com/wp-content/uploads/2016/07/00huevos-y-embarazo.jpg', 'Huevos (2Uds)', 12, 9, 1, 141, 'Proteinas'),
(9, 2, 'https://www.conasi.eu/blog/wp-content/uploads/2015/01/tofu-dentro-post.jpg', 'Tofu', 8, 4, 1, 70, 'Proteinas'),
(10, 2, 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/08/27/Recortada/img_ysaiz_20180827-170028_imagenes_lv_terceros_9l7a0715-kEsB--656x412@LaVanguardia-Web.jpg', 'Heura', 19, 3, 1, 126, 'Proteinas'),
(11, 3, 'https://www.congeladosdeca.com/wp-content/uploads/2019/01/filete-de-merluza-SEAFLOWERS.jpg', 'Merluza', 12, 2, 0, 64, 'Proteinas'),
(12, 3.5, 'https://www.lasirena.es/34977-thickbox_default/calamar-patagonico-limpio.jpg', 'Calamar', 16, 2, 1, 80, 'Proteinas'),
(13, 0.5, 'https://www.panariapanaderias.es/wp-content/uploads/2017/09/barra-sesamo-fibra-blanca-600x600.jpg', 'Pan', 8, 1, 52, 210, 'Carbohidratos'),
(14, 1.5, 'https://dulkado.com/wp-content/uploads/2019/02/Copos-de-Avena2-1.jpg', 'Copos de Avena', 12, 7, 56, 353, 'Carbohidratos'),
(15, 2, 'https://www.diabetesjuntosxti.mx/wp-content/uploads/2012/05/quinua.jpg', 'Quinoa', 17, 6, 69, 399, 'Carbohidratos'),
(16, 0.5, 'https://ejerciciosencasa.es/wp-content/uploads/2013/12/potato.jpg', 'Patata asada', 2, 0, 15, 74, 'Carbohidratos'),
(17, 2, 'https://www.frutadelasarga.com/server/Portal_0008706/img/products/aguacate_1258327.jpg', 'Aguacate', 4, 29, 17, 322, 'Verduras'),
(18, 0.5, 'https://estaticos.miarevista.es/uploads/images/gallery/5b0d5cea5bafe8f1c55505e5/canonigos1.jpg', 'Canónigos', 2, 0, 1, 21, 'Verduras'),
(19, 1, 'https://estaticos.muyinteresante.es/uploads/images/gallery/5548e20741444aef0ed38ec2/sistema-inmune.jpg', 'Champiñones', 4, 1, 1, 34, 'Verduras'),
(20, 1, 'https://static3.elcorreo.com/www/multimedia/201907/18/media/cortadas/salud19-kGlC-U80787527438wJE-624x422@El%20Correo.jpg', 'Guisantes', 8, 1, 20, 117, 'Verduras'),
(21, 1, 'https://cdn.ecotierra.es/tienda/verduras-ecologicas/judias-verdes-redondas-ecologicas-1-kg/image_1_large', 'Judías', 2, 0, 7, 31, 'Verduras'),
(22, 1, 'https://cashalcorte.com/176-large_default/queso-oveja-pastor.jpg', 'Queso curado 30 Gr', 10, 11, 1, 143, 'extras'),
(23, 1, 'https://llenatudespensa.com/perlas-de-mozzarella-fresca-de-2gr_Id-3223.jpg', 'Perlas de Mozarella 30 Gr', 5, 8, 1, 86, 'extras'),
(24, 1, 'https://img.interempresas.net/fotos/1341264.jpeg', 'Fresas 150 Gr', 1, 1, 12, 48, 'extras'),
(25, 1, 'https://static3.abc.es/media/familia/2018/04/03/kiwi-kC0--620x349@abc.jpg', 'Kiwi 130 Gr', 2, 1, 19, 79, 'extras'),
(26, 1, 'https://static2.diariosur.es/www/multimedia/201806/06/media/cortadas/platanos-kguD-U502143732815fWD-624x385@Diario%20Sur.jpg', 'Plátano 80 Gr', 1, 0, 17, 76, 'extras'),
(27, 1, 'https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/08/24/Recortada/img_cris_20180822-181929_imagenes_lv_otras_fuentes_istock-465878223-kQsH-U451424854639BoH-992x558@LaVanguardia-Web.jpg', 'Cacahuetes Tostados 30 Gr', 8, 15, 3, 184, 'extras'),
(28, 1, 'https://valenciaplaza.com/public/Image/2019/11/shutterstock_149492621-Pistachos-con-cascara-kxk_NoticiaAmpliada.jpg', 'Pistachos 30 Gr', 6, 14, 8, 169, 'extras'),
(29, 1, 'https://mejorconsalud.com/wp-content/uploads/2013/07/almendra.jpg?width=1200&enable=upscale', 'Almendras 30 Gr', 4, 16, 8, 190, 'extras'),
(30, 1, 'https://www.vivosano.org/wp-content/uploads/Nueces.jpg', 'Nueces 30 Gr', 5, 20, 4, 196, 'extras'),
(31, 0.5, 'https://unareceta.com/wp-content/uploads/2017/07/receta-de-salsa-cesar-sin-huevo.jpg', 'Salsa César 30 Gr', 1, 16, 2, 150, 'extras'),
(32, 0.5, 'https://placeralplato.com/files/2014/05/salsa-de-soja.jpg', 'Salsa de Soja 30 Gr', 2, 0, 5, 27, 'extras'),
(33, 0.5, 'https://ep00.epimg.net/elcomidista/imagenes/2016/05/13/receta/1463130322_643216_1463130434_media_normal.jpg', 'Vinagreta 30 Gr', 1, 7, 3, 81, 'extras'),
(34, 0.5, 'https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2014/06/16/5c00141a16334d00019190e5/1239x697.jpg', 'Salsa Yogurt 30 Gr', 1, 6, 4, 70, 'extras'),
(35, 0.5, 'https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2017/03/30/5c00ff665a2c1100017758a5/1239x697.jpg', 'Salsa de Tomate 30 Gr', 0, 0, 1, 5, 'extras'),
(36, 0.5, 'https://t2.uc.ltmcdn.com/images/4/6/2/img_como_hacer_salsa_de_ajo_y_perejil_27264_600.jpg', 'Aliño ajo y Perejil 30 Gr', 0, 24, 3, 227, 'extras'),
(39, 1.5, 'https://4.bp.blogspot.com/-_PQasB045Kg/Ww7MAIh4d3I/AAAAAAAAD8E/CXXkfa3Ix9UexHhNV3dVA2ySWeLcZ5BBQCLcBGAs/s1600/atun.gif', 'Atún claro al natural', 20, 1, 0, 84, 'Proteinas'),
(40, 3.5, 'https://okdiario.com/img/2018/12/14/receta-de-pizza-de-atun-fresco-1-620x349.jpg', 'Atún fresco', 24, 5, 0, 143, 'Proteinas'),
(41, 1.5, 'https://upload.wikimedia.org/wikipedia/commons/8/85/Spaghetti_chitarra.png', 'Espaguetis', 11, 2, 55, 288, 'Carbohidratos'),
(42, 1.5, 'https://t4.ftcdn.net/jpg/00/52/92/09/240_F_52920923_XNIoBDfswJwyMr0uOxNhkAgsOkW00JbO.jpg', 'Lazos', 11, 2, 55, 288, 'Carbohidratos'),
(43, 1.2, 'https://s3.eu-west-2.amazonaws.com/mentta/producto/esparragos-verdes-manojo-250-g-2.jpg', 'Espárragos', 2, 0, 2, 21, 'Verduras'),
(44, 1.2, 'https://cdn.shopify.com/s/files/1/2610/8916/products/judias_600x.jpg?v=1546965678', 'Judías verdes', 2, 0, 7, 31, 'Verduras'),
(46, 2.8, 'https://www.merca2.es/wp-content/uploads/2019/08/salm.jpg', 'Salmón ahumado 85 Gr', 15, 4, 0, 99, 'extras'),
(47, 2.5, 'https://s1.eestatic.com/2019/12/03/ciencia/nutricion/Jamon-OCU_Organizacion_de_Consumidores_y_Usuarios-Grasas-Nutricion_449217087_139553074_1706x960.jpg', 'Jamón serrano 50 Gr', 14, 4, 0, 98, 'extras'),
(48, 2.3, 'https://recetasdecocina.elmundo.es/wp-content/uploads/2015/08/receta-pisto-manchego-casero.jpg', 'Pisto 50 Gr', 1, 2, 3, 31, 'extras'),
(49, 1, 'https://www.verdesprados.es/91-thickbox_default/bacon-extra-ecologico.jpg', 'Bacon 20 Gr', 3, 6, 0, 70, 'extras'),
(50, 1, 'https://i0.pngocean.com/files/866/15/784/sweet-corn-maize-corn-kernel-food-baby-corn-corn.jpg', 'Maíz 50 Gr', 2, 1, 9, 51, 'extras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alimentosNoDeseados`
--

CREATE TABLE `alimentosNoDeseados` (
  `id` int(11) NOT NULL,
  `alimentoId` int(11) DEFAULT NULL,
  `platoId` int(11) DEFAULT NULL,
  `dietaPersonalId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alimentosNoDeseados`
--

INSERT INTO `alimentosNoDeseados` (`id`, `alimentoId`, `platoId`, `dietaPersonalId`) VALUES
(52, 5, NULL, 19),
(53, 9, NULL, 19),
(54, 10, NULL, 19),
(55, 11, NULL, 19),
(56, NULL, 7, 19),
(57, 9, NULL, 20),
(58, 11, NULL, 20),
(59, 10, NULL, 20),
(60, NULL, 13, 20),
(61, NULL, 11, 20),
(62, NULL, 14, 20),
(63, 9, NULL, 21),
(64, 11, NULL, 21),
(65, 10, NULL, 21),
(66, NULL, 9, 21),
(67, NULL, 13, 21),
(68, 3, NULL, 22),
(69, 11, NULL, 22),
(70, 9, NULL, 22),
(71, NULL, 10, 22),
(72, 10, NULL, 22),
(73, NULL, 17, 22),
(74, NULL, 9, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigosPromocionales`
--

CREATE TABLE `codigosPromocionales` (
  `id` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `preciominimo` int(11) DEFAULT NULL,
  `codigo` varchar(20) NOT NULL,
  `validez` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `codigosPromocionales`
--

INSERT INTO `codigosPromocionales` (`id`, `descuento`, `preciominimo`, `codigo`, `validez`) VALUES
(3, 30, 10, '30ABRIL', '2025-02-01'),
(5, 20, 0, 'wrff', '2024-01-02'),
(6, 5, 5, '5ABRIL', '2020-07-08'),
(13, 15, 0, 'AdiosCorona', '2020-06-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dietaPersonal`
--

CREATE TABLE `dietaPersonal` (
  `id` int(11) NOT NULL,
  `talla` int(11) NOT NULL,
  `peso` int(11) NOT NULL,
  `edad` int(11) NOT NULL,
  `diasActividad` int(11) NOT NULL,
  `sexo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dietaPersonal`
--

INSERT INTO `dietaPersonal` (`id`, `talla`, `peso`, `edad`, `diasActividad`, `sexo`, `descripcion`, `usuarioId`) VALUES
(19, 190, 78, 20, 7, 'mujer', 'esrdgfh', 6),
(20, 178, 78, 18, 3, 'hombre', 'drgsg', 6),
(21, 178, 78, 18, 6, 'hombre', 'quiero perder peso', 6),
(22, 179, 76, 20, 7, 'hombre', 'ganar masa muscular', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones`
--

CREATE TABLE `direcciones` (
  `id` int(11) NOT NULL,
  `nombre_via` varchar(150) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `cod_postal` int(5) DEFAULT NULL,
  `usuarioid` int(11) DEFAULT NULL,
  `numero` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `direcciones`
--

INSERT INTO `direcciones` (`id`, `nombre_via`, `ciudad`, `pais`, `cod_postal`, `usuarioid`, `numero`) VALUES
(4, 'puerto rico ', 'valencia', 'españa', 46005, 1, '34 puerta 9'),
(9, 'Avenida del reino de valencia ', 'valencia', 'españa', 46005, 9, 'numero 10 puerta 1'),
(10, 'Luis Lamarca', 'valencia', 'España', 46019, 9, '35 puerta 8'),
(11, 'Calle Luis Lamarca', 'valencia', 'españa', 46005, 16, '10 puerta 1'),
(12, 'Avenida del reino de valencia ', 'Valencia', 'España', 46005, 6, '10 puerta 1'),
(15, 'san vicente', 'Alicante', 'españa', 46005, 6, '99');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familia`
--

CREATE TABLE `familia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `descripcion` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `familia`
--

INSERT INTO `familia` (`id`, `nombre`, `descripcion`) VALUES
(1, 'platos', 'Familia de productos correspondientes con los Platos preparados.'),
(5, 'Tuppers', 'Familia de productos correspondientes con los Tuppers.'),
(6, 'Plan Semanal', 'Plan que lleva tuppers personalizados para todas las comidas de una semana.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `respuesta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `faq`
--

INSERT INTO `faq` (`id`, `pregunta`, `respuesta`) VALUES
(1, '¿Cuánto tarda en llegar los pedidos?', 'Dependerá de la localización desde dónde se pida, pero si estamos hablando de territorio peninsular el plazo de entrega es de 24H-48H.'),
(2, '¿Qué tipo de envase usais?', 'Todos nuestros platos van envasados al vacío en unos tuppers fabricados con materiales 100% reciclables y biodegradables.'),
(3, '¿Cuántos gramos de comida hay en los platos preparados?', 'Los gramos pueden variar pero siempre entre 200 y 400 gramos de peso'),
(4, '¿Los precios de los alimentos en tuppers personalizados son por 100 gramos?', 'En efecto. Tanto los precios de cada alimento individual como la información nutricional del tupper que estas creando son por cada 100 gramos. Excepto el precio total, esta es la multiplicación del precio total por el número de tuppers elegido.'),
(5, '¿Cuánto tardan en caducar los tuppers y platos?', 'Todas nuestras elaboraciones se entregan envasadas al vacío de forma que su fecha de caducidad es alargada al máximo. Suelen tener una fecha de ingesta recomendada de unos 10 días desde su elaboración.'),
(7, 'porque esta todo tan bueno', 'Porque somos ff company');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `globalUsers`
--

CREATE TABLE `globalUsers` (
  `nombre` varchar(255) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `globalUsers`
--

INSERT INTO `globalUsers` (`nombre`, `usuario`, `password`, `rol`, `id`) VALUES
('admin', 'admin', '1234', 'administrador', 1),
('Andrés', 'pepito', '123', 'nutricionista', 11),
('sandra', 'sandra', '123', 'nutricionista', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineasPlanSemanal`
--

CREATE TABLE `lineasPlanSemanal` (
  `id` int(11) NOT NULL,
  `tupperid` int(11) DEFAULT NULL,
  `platoid` int(11) DEFAULT NULL,
  `posicion` int(11) DEFAULT NULL,
  `semanalid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lineasPlanSemanal`
--

INSERT INTO `lineasPlanSemanal` (`id`, `tupperid`, `platoid`, `posicion`, `semanalid`) VALUES
(91, NULL, 6, 0, 9),
(92, NULL, 10, 3, 9),
(93, NULL, 11, 4, 9),
(94, NULL, 12, 5, 9),
(95, NULL, 7, 1, 9),
(96, NULL, 4, 2, 9),
(97, NULL, 3, 6, 9),
(98, 176, NULL, 7, 9),
(99, NULL, 4, 8, 9),
(100, NULL, 18, 9, 9),
(101, NULL, 5, 10, 9),
(102, NULL, 4, 11, 9),
(103, NULL, 13, 12, 9),
(104, NULL, 14, 14, 9),
(105, 180, NULL, 13, 9),
(106, NULL, 6, 0, 10),
(107, NULL, 7, 1, 10),
(108, NULL, 10, 3, 10),
(109, NULL, 11, 4, 10),
(110, NULL, 8, 2, 10),
(111, NULL, 12, 8, 10),
(112, NULL, 13, 9, 10),
(113, NULL, 5, 7, 10),
(114, 181, NULL, 10, 10),
(115, NULL, 16, 11, 10),
(116, NULL, 6, 12, 10),
(117, NULL, 18, 13, 10),
(118, 182, NULL, 14, 10),
(119, NULL, 3, 5, 10),
(120, NULL, 4, 6, 10),
(121, NULL, 3, 0, 11),
(122, NULL, 6, 1, 11),
(123, NULL, 11, 3, 11),
(124, NULL, 8, 2, 11),
(125, 183, NULL, 5, 11),
(126, NULL, 6, 4, 11),
(127, 182, NULL, 6, 11),
(128, NULL, 3, 0, 12),
(129, NULL, 6, 1, 12),
(130, NULL, 8, 2, 12),
(131, NULL, 6, 4, 12),
(132, NULL, 11, 3, 12),
(133, 183, NULL, 5, 12),
(134, 182, NULL, 6, 12),
(135, 181, NULL, 8, 12),
(136, NULL, 4, 10, 12),
(137, NULL, 18, 12, 12),
(138, NULL, 5, 11, 12),
(139, NULL, 12, 13, 12),
(140, NULL, 20, 14, 12),
(141, 184, NULL, 7, 12),
(142, 185, NULL, 9, 12),
(143, NULL, 3, 0, 13),
(144, NULL, 6, 1, 13),
(145, NULL, 5, 2, 13),
(146, NULL, 6, 3, 13),
(147, NULL, 13, 5, 13),
(148, NULL, 8, 6, 13),
(149, NULL, 15, 7, 13),
(150, NULL, 17, 8, 13),
(151, NULL, 20, 9, 13),
(152, NULL, 17, 11, 13),
(153, NULL, 19, 12, 13),
(154, NULL, 12, 13, 13),
(155, NULL, 5, 14, 13),
(156, 186, NULL, 4, 13),
(157, 187, NULL, 10, 13),
(158, NULL, 3, 0, 14),
(159, NULL, 4, 1, 14),
(160, NULL, 10, 2, 14),
(161, NULL, 6, 3, 14),
(162, NULL, 6, 4, 14),
(163, NULL, 3, 5, 14),
(164, NULL, 7, 6, 14),
(165, NULL, 5, 7, 14),
(166, 181, NULL, 8, 14),
(167, NULL, 3, 9, 14),
(168, NULL, 5, 10, 14),
(169, NULL, 4, 11, 14),
(170, NULL, 10, 12, 14),
(171, NULL, 3, 13, 14),
(172, NULL, 3, 14, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas_carrito`
--

CREATE TABLE `lineas_carrito` (
  `id` int(11) NOT NULL,
  `tipo_producto` varchar(20) NOT NULL,
  `precio` float DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `tupperid` int(11) DEFAULT NULL,
  `platoid` int(11) DEFAULT NULL,
  `plansemanalid` int(11) DEFAULT NULL,
  `usuarioid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lineas_carrito`
--

INSERT INTO `lineas_carrito` (`id`, `tipo_producto`, `precio`, `cantidad`, `tupperid`, `platoid`, `plansemanalid`, `usuarioid`) VALUES
(602, 'platos', 6.5, 4, NULL, 3, NULL, 9),
(607, 'platos', 6, 5, NULL, 4, NULL, 9),
(617, 'tupper', 6.5, 5, 176, NULL, NULL, 9),
(633, 'platos', 6.5, 8, NULL, 3, NULL, 16),
(635, 'platos', 6, 9, NULL, 4, NULL, 16),
(639, 'platos', 4, 8, NULL, 5, NULL, 9),
(641, 'tupper', 3, 1, 183, NULL, NULL, 16),
(643, 'tupper', 8, 2, 178, NULL, NULL, 9),
(715, 'tupper', 7.8, 3, 190, NULL, NULL, 16),
(718, 'platos', 6, 1, NULL, 4, NULL, 1),
(720, 'tupper', 3.25, 1, 191, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas_pedido`
--

CREATE TABLE `lineas_pedido` (
  `id` int(11) NOT NULL,
  `tipo_producto` varchar(20) NOT NULL,
  `precio` float DEFAULT NULL,
  `tupperid` int(11) DEFAULT NULL,
  `platoid` int(11) DEFAULT NULL,
  `plansemanalid` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `pedidoid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lineas_pedido`
--

INSERT INTO `lineas_pedido` (`id`, `tipo_producto`, `precio`, `tupperid`, `platoid`, `plansemanalid`, `cantidad`, `pedidoid`) VALUES
(163, 'tupper', 6.5, 176, NULL, NULL, 2, 76),
(164, 'tupper', 7.35, 177, NULL, NULL, 3, 76),
(168, 'platos', 6.5, NULL, 3, NULL, 1, 80),
(169, 'platos', 6, NULL, 4, NULL, 2, 80),
(170, 'tupper', 7.5, 181, NULL, NULL, 2, 80),
(171, 'platos', 6.5, NULL, 3, NULL, 1, 81),
(172, 'tupper', 7.5, 181, NULL, NULL, 1, 82),
(173, 'plato', 6.5, NULL, 3, NULL, 2, 83),
(174, 'tupper', 7.5, 181, NULL, NULL, 5, 83),
(175, 'plato', 6, NULL, 4, NULL, 4, 83),
(176, 'Plan semanal', 61.2, NULL, NULL, 10, 1, 83),
(177, 'plato', 6.5, NULL, 3, NULL, 2, 84),
(178, 'Plan personal', 88.75, NULL, NULL, 13, 1, 85),
(179, 'Plan semanal', 68.17, NULL, NULL, 14, 1, 85),
(180, 'platos', 6.5, NULL, 3, NULL, 1, 86),
(181, 'platos', 6, NULL, 4, NULL, 1, 86),
(182, 'platos', 4, NULL, 5, NULL, 1, 86),
(183, 'Plan personal', 88.75, NULL, NULL, 13, 2, 86),
(184, 'Plan semanal', 68.17, NULL, NULL, 14, 2, 86),
(185, 'tupper', 2.75, 188, NULL, NULL, 1, 86),
(186, 'platos', 6, NULL, 4, NULL, 5, 87),
(187, 'tupper', 3.25, 189, NULL, NULL, 1, 87),
(188, 'platos', 4.5, NULL, 15, NULL, 3, 87),
(189, 'platos', 4, NULL, 5, NULL, 1, 87),
(190, 'platos', 5, NULL, 12, NULL, 1, 87),
(191, 'plato', 6, NULL, 4, NULL, 9, 88),
(192, 'plato', 4.5, NULL, 15, NULL, 5, 88),
(193, 'tupper', 3.25, 189, NULL, NULL, 2, 88),
(194, 'platos', 6, NULL, 4, NULL, 1, 89),
(195, 'Plan semanal', 68.17, NULL, NULL, 14, 1, 89),
(196, 'Plan personal', 88.75, NULL, NULL, 13, 1, 89),
(197, 'plato', 4.5, NULL, 15, NULL, 5, 89),
(198, 'platos', 4.5, NULL, 6, NULL, 1, 89),
(199, 'tupper', 8.3, 192, NULL, NULL, 1, 89),
(200, 'platos', 6.5, NULL, 3, NULL, 2, 89),
(201, 'plato', 4.5, NULL, 15, NULL, 5, 90),
(202, 'plato', 4.5, NULL, 6, NULL, 2, 90),
(203, 'platos', 6.5, NULL, 3, NULL, 1, 91),
(204, 'tupper', 3.25, 189, NULL, NULL, 4, 92),
(205, 'plato', 6, NULL, 4, NULL, 6, 92),
(206, 'plato', 4.5, NULL, 15, NULL, 6, 92),
(207, 'platos', 4.5, NULL, 6, NULL, 1, 93),
(208, 'tupper', 5.75, 194, NULL, NULL, 3, 93),
(209, 'platos', 4, NULL, 5, NULL, 6, 93),
(210, 'tupper', 6.5, 176, NULL, NULL, 2, 94),
(211, 'plato', 6.5, NULL, 3, NULL, 7, 94),
(212, 'platos', 5, NULL, 12, NULL, 2, 94),
(213, 'plato', 4.5, NULL, 15, NULL, 5, 94),
(214, 'tupper', 8.3, 192, NULL, NULL, 1, 94);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `contenido` varchar(500) DEFAULT NULL,
  `usuarioid` int(11) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `contenido`, `usuarioid`, `correo`, `telefono`, `nombre`) VALUES
(1, 'Por que son tan exquisitos los tuppers', 1, 'smartinalbo28@gmail.com', '673290876', 'Sandra'),
(2, 'porque eres tan feo?', 9, 'calpena99@gmail.com', '675036671', 'Andres'),
(3, 'como puede ser que mole tanto vuestra app', 16, 'smartinalbo28@gmail.com', '675036671', 'sandra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `ref_pedido` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL DEFAULT current_timestamp(),
  `precio` float NOT NULL,
  `usuarioid` int(11) DEFAULT NULL,
  `direccionid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`ref_pedido`, `fecha_pedido`, `precio`, `usuarioid`, `direccionid`) VALUES
(76, '2020-04-27', 40.04, 9, 9),
(80, '2020-04-28', 38.49, 16, 11),
(81, '2020-04-28', 11.49, 16, 11),
(82, '2020-04-28', 12.49, 16, 11),
(83, '2020-04-28', 135.7, 16, 11),
(84, '2020-04-29', 17.99, 16, 11),
(85, '2020-05-13', 156.92, 6, 12),
(86, '2020-05-13', 333.09, 6, 12),
(87, '2020-05-14', 55.75, 6, 12),
(88, '2020-05-19', 83, 6, 12),
(89, '2020-06-01', 211.22, 6, 12),
(90, '2020-06-02', 36.49, 6, 12),
(91, '2020-06-03', 11.49, 6, 12),
(92, '2020-06-03', 60.8, 6, 12),
(93, '2020-06-04', 40.592, 6, 12),
(94, '2020-06-05', 94.335, 6, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planSemanal`
--

CREATE TABLE `planSemanal` (
  `id` int(11) NOT NULL,
  `precio` float DEFAULT NULL,
  `familiaid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `planSemanal`
--

INSERT INTO `planSemanal` (`id`, `precio`, `familiaid`) VALUES
(9, 63.495, 6),
(10, 61.2, 6),
(11, 72.5, 6),
(12, 72.5, 6),
(13, 68.75, 6),
(14, 68.17, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `proteinas` int(5) DEFAULT NULL,
  `grasas` int(5) DEFAULT NULL,
  `hidratos` int(5) DEFAULT NULL,
  `calorias` float DEFAULT NULL,
  `familiaid` int(11) NOT NULL,
  `tipoplato` varchar(60) DEFAULT NULL,
  `valoracion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`id`, `nombre`, `descripcion`, `foto`, `precio`, `proteinas`, `grasas`, `hidratos`, `calorias`, `familiaid`, `tipoplato`, `valoracion`) VALUES
(3, 'curry de mama ', 'Delicioso arroz con pollo y especias de curry asiatico', 'https://t1.rg.ltmcdn.com/es/images/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg', 6.5, 20, 14, 22, 350, 1, 'Comidas', 4),
(4, 'Risotto ', 'Arroz cocinado con muchos quesos a fuego lento. Delicioso!!', 'https://okdiario.com/img/recetas/2017/07/12/risotto-de-queso.jpg', 5, 14, 13, 44, 356, 1, 'Comidas', 4),
(5, 'Ensalada mediterranea', 'Maravillosa variedad de verduras de nuestra tierra. Rico y saludable!', 'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d1de76b5bafe804b488438c/ensaladamediterranea-int.jpg', 4, 1, 0, 35, 23, 1, 'Comidas', 4),
(6, 'Tortitas Proteicas', 'Deliciosas tortitas hechas con harina de avena y sun azucar añadido', 'https://lovecooking.neff.es/wp-content/uploads//2017/07/Posting_Facebook_Recipe_Pancake_with_cinnamon_butter_5_224.jpg', 4.5, 18, 3, 30, 238, 1, 'Desayunos', 5),
(7, 'Tostada con queso y salmón ahumado', 'Deliciosas tostadas de pan de cereales con queso crema de untar y salmón ahumado.', 'https://www.dietfarma.com/sites/default/files/tostada_salmon_queso.jpg', 4.2, 16, 13, 14, 277, 1, 'Desayunos', 4),
(8, 'Tostadas de aguacate', 'Dos tostadas de pan de molde de multicerales con base de aguacate y acompañadas con un delicioso revuelto y queso feta con tomate seco.', 'https://www.vips.es/sites/default/files/styles/optimize/public/aguacate_toasts.jpg?itok=gwXW9SNG', 5, 13, 26, 42, 410, 1, 'Desayunos', 5),
(9, 'Gachas de avena', 'Bowl de copos de avena cocinados con leche y decorados con fruta de temporada troceada ', 'https://www.mujerhoy.com/noticias/201903/11/media/cortadas/recetas-porridges2-kiaG-U70875334084K0F-644x483@MujerHoy.jpeg', 4.5, 6, 13, 75, 437, 1, 'Desayunos', 4),
(10, 'Yogurt con muesli y fruta de temporada', 'Bowl de yogurt natural edulcorado con bajo contenido en grasas acompañado de exquisitas frutas de temporada y muesli', 'https://www.vips.es/sites/default/files/styles/optimize/public/bowl_de_yogur_y_muesli.jpg?itok=3zJ7X12n', 3.5, 4, 1, 7, 52, 1, 'Desayunos', 4),
(11, 'Tostadas de jamón con tomate', 'Delicioso pan de mollete con tomate triturado y jamón ibérico', 'https://www.vips.es/sites/default/files/styles/optimize/public/720x500pxmollete.jpg?itok=dcdHwYDE', 4, 15, 12, 34, 340, 1, 'Desayunos', 5),
(12, 'Arroz de coliflor con verduras', 'Arroz hecho a base de coliflor con un salteado de verduras ', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/06/receta-facil-de-arroz-de-coliflor-rojo.jpg', 5, 2, 2, 4, 40, 1, 'Comidas', 3),
(13, 'Guisantes con jamón', 'Salteado de guisantes con jamón', 'https://www.mundorecetas.com/news/wp-content/uploads/2017/03/guisantes-con-jamon-thermomix-2-min-680x454.jpg', 3.5, 15, 8, 17, 226, 1, 'Comidas', 4),
(14, 'Quesadillas de pollo', 'Auténticas quesadillas mexicanas rellenas de queso y pollo', 'https://www.recetin.com/wp-content/uploads/2013/10/quesadilla-de-pollo.jpg', 3.8, 31, 31, 37, 530, 1, 'Comidas', 5),
(15, 'Fajitas mexicanas', 'Auténticas fajitas mexicanas rellenas de pollo, ternera y verduras', 'https://www.deliciosi.com/images/900/935/fajitas-mexicanas.jpg', 4.5, 20, 12, 41, 352, 1, 'Comidas', 4),
(16, 'Espaguetis de calabacín', 'Espaguetis hechos con calabacín con pesto rojo de tomates secos acompañados de gambas ', 'https://www.thermorecetas.com/wp-content/uploads/2016/10/espaguetis-de-calabacin-con-pesto-de-tomates-secos-y-avellanas-thermorecetas.jpg', 3.8, 10, 1, 2, 110, 1, 'Comidas', 3),
(17, 'Bacalao con pimientos y puré.', 'Pescado blanco acompañado de un salteado de pimientos y puré de patatas', 'https://cdn5.recetasdeescandalo.com/wp-content/uploads/2014/08/bacalao-al-horno-con-pimientos-y-pure-de-patata.jpg', 4.5, 18, 5, 20, 230, 1, 'Cenas', 4),
(18, 'Crema de verduras', 'Deliciosa crema hecha con verduras frescas y nata sin materia grasa', 'https://saposyprincesas.elmundo.es/wp-content/uploads/2017/11/recetas-de-cremas-de-batata-y-zanahoria-1.jpg', 3.5, 5, 9, 16, 158, 1, 'Cenas', 5),
(19, 'Brocheta de pavo y verduras', 'Brochetas de pavo adobado con pimientos, cebolla y berenjena', 'https://1.bp.blogspot.com/--uYQoRoKurw/XY3HvV4BWVI/AAAAAAAAV7s/bTb-1NkjEsE9rTqdG8ECE_4JXKGCflh7ACLcBGAsYHQ/s1600/brochetas%2Bde%2Bpavo%2Bcon%2Bverduras%2B%25283%2529.jpg', 3.5, 17, 14, 2, 200, 1, 'Cenas', 4),
(20, 'Lomo de merluza con pisto', 'Filete de merluza fresca acompañada de pisto de verduras casero', 'https://elpetitchef.com/Images/297/presentacion.jpg', 4, 14, 4, 9, 140, 1, 'Cenas', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tuppers`
--

CREATE TABLE `tuppers` (
  `id` int(11) NOT NULL,
  `precio` float DEFAULT NULL,
  `familiaid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tuppers`
--

INSERT INTO `tuppers` (`id`, `precio`, `familiaid`) VALUES
(176, 6.5, 5),
(177, 7.35, 5),
(178, 8, 5),
(179, 6, 5),
(180, 7.7, 5),
(181, 7.5, 5),
(182, 6.5, 5),
(183, 3, 5),
(184, 3.5, 5),
(185, 5, 5),
(186, 4.5, 5),
(187, 6.25, 5),
(188, 2.75, 5),
(189, 3.25, 5),
(190, 7.8, 5),
(191, 3.25, 5),
(192, 8.3, 5),
(193, 7.25, 5),
(194, 5.75, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tuppers_alimentos`
--

CREATE TABLE `tuppers_alimentos` (
  `id` int(11) NOT NULL,
  `alimentoId` int(11) NOT NULL,
  `alimentoC` int(11) NOT NULL,
  `tupperId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tuppers_alimentos`
--

INSERT INTO `tuppers_alimentos` (`id`, `alimentoId`, `alimentoC`, `tupperId`) VALUES
(284, 2, 200, 176),
(285, 1, 100, 176),
(286, 35, 30, 176),
(287, 7, 200, 177),
(288, 4, 100, 177),
(289, 6, 50, 177),
(290, 3, 200, 178),
(291, 4, 100, 178),
(292, 2, 200, 179),
(293, 1, 100, 179),
(294, 12, 200, 180),
(295, 6, 100, 180),
(296, 2, 200, 181),
(297, 1, 100, 181),
(298, 23, 30, 181),
(299, 35, 30, 181),
(300, 11, 200, 182),
(301, 18, 100, 182),
(302, 4, 100, 183),
(303, 8, 100, 184),
(304, 15, 100, 184),
(305, 9, 150, 185),
(306, 19, 150, 185),
(307, 34, 30, 185),
(308, 8, 100, 186),
(309, 4, 100, 186),
(310, 11, 100, 187),
(311, 15, 100, 187),
(312, 5, 50, 187),
(313, 22, 30, 187),
(314, 2, 50, 188),
(315, 1, 50, 188),
(316, 23, 30, 188),
(317, 2, 100, 189),
(318, 1, 50, 189),
(319, 5, 50, 189),
(320, 3, 100, 190),
(321, 4, 100, 190),
(322, 48, 50, 190),
(323, 8, 150, 191),
(324, 25, 130, 191),
(325, 7, 50, 192),
(326, 29, 30, 192),
(327, 49, 20, 192),
(328, 4, 100, 192),
(329, 48, 50, 192),
(330, 40, 200, 193),
(331, 16, 50, 193),
(332, 35, 30, 194),
(333, 2, 150, 194),
(334, 1, 150, 194);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasenya` varchar(20) DEFAULT NULL,
  `creado_en` date NOT NULL DEFAULT current_timestamp(),
  `promocionalid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `contrasenya`, `creado_en`, `promocionalid`) VALUES
(1, 'Andres', 'Calpena lopez ', '656943749', 'calpena99@gmail.com', 'andres', '2020-02-21', 6),
(4, 'Sandra', 'Martin Albo', '675036671', 'sandra@cieep.com', 'Andy1357', '2020-03-03', 5),
(5, 'Ivan', 'Campos', '456456456', 'ivan@cieep.com', 'Ivan1357', '2020-03-03', 5),
(6, 'Andres', 'calpena lopez', '675036671', 'calpena99@gmail.com', 'Andy1357', '2020-04-03', 6),
(7, 'andres', 'calpena', '456456456', 'worghubowdj@ciee.com', 'Andy1357', '2020-03-04', 5),
(8, 'Andres', 'calpena lopez', '231458985', 'calpena99@gmail.com', 'Andy1357', '2020-03-04', 5),
(9, 'Andress', 'calpena', '67503671', 'calpena999@gmail.com', 'Andy1357', '2020-03-04', 5),
(10, 'Andres', 'calpena lopez', '675036671', 'andres@cieep.com', 'Andy1357', '2020-03-03', 5),
(11, 'eporjggfrth', 'osirgjhggg', '964654964', 'sprgih@cieep.com', 'Andy1357.', '2020-03-04', 5),
(12, 'Francisca', 'Lopez Bertomeu', '685479987', 'francisca@cieep.com', '1234abcA', '2020-03-06', 5),
(15, 'Andres ', 'Calpena Lçopez', '675036671', 'mari@cieep.com', 'Andy1357', '2020-04-06', 5),
(16, 'sandra', 'martin-albo', '653264118', 'smartinalbo28@gmail.com', 'Sandra1357', '2020-10-04', 5),
(26, 'Ana Maria', 'Gomez-Casero', '630728001', 'annadeliacc@gmail.com', 'Andy1357', '2020-06-01', NULL),
(27, 'andres', 'calpena', '675035563', 'andres.calpena.lopez@cieep.com', 'Andy1357.', '2020-06-04', NULL),
(28, 'andres', 'calpena verdu', '963747043', 'ancalpena6@gmail.com', 'Andy1357', '2020-06-05', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alimentosNoDeseados`
--
ALTER TABLE `alimentosNoDeseados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ajena_alimentos` (`alimentoId`),
  ADD KEY `ajena_dieta` (`dietaPersonalId`),
  ADD KEY `ajena_platito` (`platoId`);

--
-- Indices de la tabla `codigosPromocionales`
--
ALTER TABLE `codigosPromocionales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dietaPersonal`
--
ALTER TABLE `dietaPersonal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dieta_usuarios` (`usuarioId`);

--
-- Indices de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_direcciones` (`usuarioid`);

--
-- Indices de la tabla `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `globalUsers`
--
ALTER TABLE `globalUsers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lineasPlanSemanal`
--
ALTER TABLE `lineasPlanSemanal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `linea_semanal` (`semanalid`),
  ADD KEY `linea_tupper` (`tupperid`),
  ADD KEY `linea_platos` (`platoid`);

--
-- Indices de la tabla `lineas_carrito`
--
ALTER TABLE `lineas_carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `a_usuario` (`usuarioid`),
  ADD KEY `carrito_semanal` (`plansemanalid`),
  ADD KEY `a_producto` (`platoid`),
  ADD KEY `a_tupper` (`tupperid`);

--
-- Indices de la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_pedido` (`pedidoid`),
  ADD KEY `pedido_semanal` (`plansemanalid`),
  ADD KEY `ajena_platos` (`platoid`),
  ADD KEY `ajena_tuppers` (`tupperid`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_mensajes` (`usuarioid`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ref_pedido`),
  ADD KEY `ca_pedidos` (`usuarioid`),
  ADD KEY `ajena_direccion` (`direccionid`);

--
-- Indices de la tabla `planSemanal`
--
ALTER TABLE `planSemanal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `familia_semanal` (`familiaid`);

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_familia` (`familiaid`);

--
-- Indices de la tabla `tuppers`
--
ALTER TABLE `tuppers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_familia2` (`familiaid`);

--
-- Indices de la tabla `tuppers_alimentos`
--
ALTER TABLE `tuppers_alimentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alimento_ajena` (`alimentoId`),
  ADD KEY `tupper_ajena` (`tupperId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ca_codigo` (`promocionalid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alimentos`
--
ALTER TABLE `alimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `alimentosNoDeseados`
--
ALTER TABLE `alimentosNoDeseados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `codigosPromocionales`
--
ALTER TABLE `codigosPromocionales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `dietaPersonal`
--
ALTER TABLE `dietaPersonal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `direcciones`
--
ALTER TABLE `direcciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `familia`
--
ALTER TABLE `familia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `globalUsers`
--
ALTER TABLE `globalUsers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `lineasPlanSemanal`
--
ALTER TABLE `lineasPlanSemanal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;

--
-- AUTO_INCREMENT de la tabla `lineas_carrito`
--
ALTER TABLE `lineas_carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=760;

--
-- AUTO_INCREMENT de la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=215;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ref_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `planSemanal`
--
ALTER TABLE `planSemanal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `tuppers`
--
ALTER TABLE `tuppers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT de la tabla `tuppers_alimentos`
--
ALTER TABLE `tuppers_alimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=335;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alimentosNoDeseados`
--
ALTER TABLE `alimentosNoDeseados`
  ADD CONSTRAINT `ajena_alimentos` FOREIGN KEY (`alimentoId`) REFERENCES `alimentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ajena_dieta` FOREIGN KEY (`dietaPersonalId`) REFERENCES `dietaPersonal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ajena_platito` FOREIGN KEY (`platoId`) REFERENCES `platos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `dietaPersonal`
--
ALTER TABLE `dietaPersonal`
  ADD CONSTRAINT `dieta_usuarios` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `direcciones`
--
ALTER TABLE `direcciones`
  ADD CONSTRAINT `ca_direcciones` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `lineasPlanSemanal`
--
ALTER TABLE `lineasPlanSemanal`
  ADD CONSTRAINT `linea_platos` FOREIGN KEY (`platoid`) REFERENCES `platos` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `linea_semanal` FOREIGN KEY (`semanalid`) REFERENCES `planSemanal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `linea_tupper` FOREIGN KEY (`tupperid`) REFERENCES `tuppers` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Filtros para la tabla `lineas_carrito`
--
ALTER TABLE `lineas_carrito`
  ADD CONSTRAINT `a_producto` FOREIGN KEY (`platoid`) REFERENCES `platos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `a_tupper` FOREIGN KEY (`tupperid`) REFERENCES `tuppers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `a_usuario` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carrito_semanal` FOREIGN KEY (`plansemanalid`) REFERENCES `planSemanal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `lineas_pedido`
--
ALTER TABLE `lineas_pedido`
  ADD CONSTRAINT `ajena_platos` FOREIGN KEY (`platoid`) REFERENCES `platos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ajena_tuppers` FOREIGN KEY (`tupperid`) REFERENCES `tuppers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ca_pedido` FOREIGN KEY (`pedidoid`) REFERENCES `pedidos` (`ref_pedido`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_semanal` FOREIGN KEY (`plansemanalid`) REFERENCES `planSemanal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `ca_mensajes` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `ajena_direccion` FOREIGN KEY (`direccionid`) REFERENCES `direcciones` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `ca_pedidos` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `planSemanal`
--
ALTER TABLE `planSemanal`
  ADD CONSTRAINT `familia_semanal` FOREIGN KEY (`familiaid`) REFERENCES `familia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `platos`
--
ALTER TABLE `platos`
  ADD CONSTRAINT `ca_familia` FOREIGN KEY (`familiaid`) REFERENCES `familia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tuppers`
--
ALTER TABLE `tuppers`
  ADD CONSTRAINT `ca_familia2` FOREIGN KEY (`familiaid`) REFERENCES `familia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tuppers_alimentos`
--
ALTER TABLE `tuppers_alimentos`
  ADD CONSTRAINT `alimento_ajena` FOREIGN KEY (`alimentoId`) REFERENCES `alimentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tupper_ajena` FOREIGN KEY (`tupperId`) REFERENCES `tuppers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `ca_codigo` FOREIGN KEY (`promocionalid`) REFERENCES `codigosPromocionales` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

DELIMITER $$
--
-- Eventos
--
CREATE DEFINER=`root`@`localhost` EVENT `ELIMINA_CODIGOS` ON SCHEDULE EVERY 1 DAY STARTS '2020-04-17 20:14:34' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'Evento elimina codigos lanzado' DO DELETE FROM codigosPromocionales WHERE DATEDIFF(NOW(), validez) > 0$$

DELIMITER ;
COMMIT;


