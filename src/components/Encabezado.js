import React from 'react';
import { Outlet } from 'react-router-dom';

const Encabezado = () => {
	return (
		<div>
			<h1>Menu Principal</h1>
			<p>
				Este es un componente principal compartido por todas las páginas de este sitio web. Debajo
				de este componente se podrán renderizar cada una de las rutas hijas del router.
			</p>
			<hr />
			<Outlet />
		</div>
	);
};

export default Encabezado;
