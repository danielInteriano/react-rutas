import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const TemasReact = () => {
	let usuario;
	usuario = false;
	usuario = true;
	return (
		<div>
			<h1>Temas de React</h1>
			<hr />
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Nav className="me-auto">
						<Link to="/temasreact" className="btn btn-outline-warning me-2">
							Props
						</Link>
						<Link to="/temasreact/estado" className="btn btn-outline-warning me-2">
							Estado
						</Link>
						<Link to="/temasreact/componentes" className="btn btn-outline-warning me-2">
							Componente
						</Link>
						<Link to="/temasreact/login" className="btn btn-outline-warning me-2">
							Login
						</Link>
						<Link
							to={usuario ? '/temasreact/dashboard' : '/temasreact/login'}
							className="btn btn-outline-warning me-2"
						>
							Dashboard
						</Link>
					</Nav>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	);
};

export default TemasReact;
