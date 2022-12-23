import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//* La diferencia entre 'Link' y 'NavLink' es el hecho de que la segunda opción nos permite agregar de manera predefinida
//* la 'className={active}' que nos muestra la ruta que está activa en tiempo real. Con 'Link' se puedes agregar clases css
//* para el 'hover' al pasar por las opciones del menú

const Menu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand className="btn btn-outline-primary me-2">Menú</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="/" className="btn btn-outline-primary me-2">
							Home
						</NavLink>
						<NavLink to="about" className="btn btn-outline-primary me-2">
							Acerca
						</NavLink>
						<NavLink to="contact" className="btn btn-outline-primary me-2">
							Contacto
						</NavLink>
						<NavLink to="/usuario/:username" className="btn btn-outline-primary me-2">
							Perfil
						</NavLink>
						<NavLink to="/producto" className="btn btn-outline-primary me-2">
							Producto
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	);
};

export default Menu;
