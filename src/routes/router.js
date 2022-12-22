import { createBrowserRouter } from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';

export const router = createBrowserRouter([
	{
		path: '/',
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
]);
