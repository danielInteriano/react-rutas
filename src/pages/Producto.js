import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Producto = () => {
	let { search } = useLocation();
	let navegate = useNavigate();
	let query = new URLSearchParams(search);

	//*Estas son variables que sirven para la simulación de filtrar un listado de productos que se pasan
	//*como parámetros de consulta en el 'query' de filtrado.
	const LIMITE = 20;
	let start = parseInt(query.get('inicio')) || 1;
	let fin = parseInt(query.get('fin')) || LIMITE;

	//?Función para el botón atrás
	const handleAtras = () => {
		navegate({ search: `?inicio=${start - LIMITE}&fin=${fin - LIMITE}` });
	};

	//?Función para el botón adelante
	const handleAdelante = () => {
		navegate({ search: `?inicio=${start + LIMITE}&fin=${fin + LIMITE}` });
	};

	return (
		<div>
			<h1>Producto</h1>
			<hr />
			<p>
				Este es un componente donde se pasan parámetros de consulta a través de la URL. Los botones
				'Atrás' y 'Adelante' manipulan las variables 'inicio' y 'fin' que se pasan como parámetros
				de la consulta a través de la url.
			</p>
			<p>
				Mostrando los productos del <b>{start}</b> al <b>{fin}</b>
			</p>
			{start > LIMITE && (
				<Button variant="outline-success" onClick={handleAtras} className="me-3">
					Atrás
				</Button>
			)}

			<Button variant="outline-success" onClick={handleAdelante}>
				Adelante
			</Button>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Producto;
