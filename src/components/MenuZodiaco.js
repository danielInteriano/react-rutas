import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const MenuZodiaco = () => {
	let base = '/zodiaco';
	return (
		<div>
			<h1>Caballeros del Zodiaco</h1>
			<hr />
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Nav className="me-auto">
						<Link to={`${base}/`} className="btn btn-outline-light me-2">
							Caballeros Home
						</Link>
						<Link to={`${base}/agregar`} className="btn btn-outline-light me-2">
							Agregar
						</Link>
						<Link to={`${base}/editar/:id`} className="btn btn-outline-light me-2">
							Editar
						</Link>
					</Nav>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	);
};

export default MenuZodiaco;
