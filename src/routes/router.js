import { createBrowserRouter } from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import Encabezado from '../components/Encabezado';
import Error404 from '../components/Error404';
import { Home } from '../components/Home';
import Producto from '../pages/Producto';
import Usuario from '../pages/Usuario';

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
		],
	},
]);
