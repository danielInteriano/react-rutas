import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';

const Encabezado = () => {
	return (
		<div>
			<Menu />
			<main className="container">
				<p>
					Este es un componente principal compartido por todas las páginas de este sitio web. Debajo
					de este componente se podrán renderizar cada una de las rutas hijas del router.
				</p>
				<hr />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Encabezado;
