import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const TemasReact = () => {
	return (
		<div>
			<h1>Temas de React</h1>
			<hr />
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand className="btn btn-outline-primary me-2">Topics</Navbar.Brand>
					<Nav className="me-auto">
						<Link to="/temasreact" className="btn btn-outline-primary me-2">
							Props
						</Link>
						<Link to="/temasreact/estado" className="btn btn-outline-primary me-2">
							Estado
						</Link>
						<Link to="/temasreact/componentes" className="btn btn-outline-primary me-2">
							Componente
						</Link>
						<Link to="/temasreact/login" className="btn btn-outline-primary me-2">
							Login
						</Link>
						<Link to="/temasreact/dashboard" className="btn btn-outline-primary me-2">
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
