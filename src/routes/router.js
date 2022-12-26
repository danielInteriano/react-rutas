import { createBrowserRouter, Navigate } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Encabezado from '../components/Encabezado';
import Error404 from '../components/Error404';
import Home from '../components/Home';
import MenuZodiaco from '../components/MenuZodiaco';
import AgregarCaballero from '../pages/AgregarCaballero';
import Componentes from '../pages/Componentes';
import Dashboard from '../pages/Dashboard';
import EditarCaballero from '../pages/EditarCaballero';
import Estado from '../pages/Estado';
import Login from '../pages/Login';
import Producto from '../pages/Producto';
import Props from '../pages/Props';
import TablaCaballeros from '../pages/TablaCaballeros';
import TemasReact from '../pages/TemasReact';
import Usuario from '../pages/Usuario';

//? Para redireccionar a una página se utiliza el componente '<Navegate to={}>' dentro de 'to' se especifica
//? la ruta a la cual se desea redireccionar la página

let base1 = '/temasreact';
let base2 = '/zodiaco';

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <Encabezado />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: '/usuario/:username',
				element: <Usuario />,
			},
			{
				path: '/producto',
				element: <Producto />,
			},
			{
				path: '/redirecciona',
				element: <Navigate to={'/'} />,
			},
			{
				path: `${base2}`,
				element: <MenuZodiaco />,
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <TablaCaballeros />,
					},
					{
						path: `${base2}/agregar`,
						element: <AgregarCaballero />,
					},
					{
						path: `${base2}/editar/:id`,
						element: <EditarCaballero />,
					},
				],
			},
			{
				path: `${base1}`,
				element: <TemasReact />,
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <Props />,
					},
					{
						path: `${base1}/estado`,
						element: <Estado />,
					},
					{
						path: `${base1}/componentes`,
						element: <Componentes />,
					},
					{
						path: `${base1}/login`,
						element: <Login />,
					},
					{
						path: `${base1}/dashboard`,
						element: <Dashboard />,
					},
				],
			},
		],
	},
]);
