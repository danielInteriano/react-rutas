import { createBrowserRouter, Navigate } from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import Encabezado from '../components/Encabezado';
import Error404 from '../components/Error404';
import { Home } from '../components/Home';
import Componentes from '../pages/Componentes';
import Dashboard from '../pages/Dashboard';
import Estado from '../pages/Estado';
import Login from '../pages/Login';
import Producto from '../pages/Producto';
import Props from '../pages/Props';
import TemasReact from '../pages/TemasReact';
import Usuario from '../pages/Usuario';

//? Para redireccionar a una página se utiliza el componente '<Navegate to={}>' dentro de 'to' se especifica
//? la ruta a la cual se desea redireccionar la página

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
				path: '/temasreact',
				element: <TemasReact />,
				errorElement: <Error404 />,
				children: [
					{
						index: true,
						element: <Props />,
					},
					{
						path: '/temasreact/estado',
						element: <Estado />,
					},
					{
						path: '/temasreact/componentes',
						element: <Componentes />,
					},
					{
						path: '/temasreact/login',
						element: <Login />,
					},
					{
						path: '/temasreact/dashboard',
						element: <Dashboard />,
					},
				],
			},
		],
	},
]);
