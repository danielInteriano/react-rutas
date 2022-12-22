import React from 'react';
import { Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className="container">
			<Col md={7}>
				<span>
					<i className="bi bi-c-circle"></i>
				</span>
				<p>Todos los derechos reservados.</p>
			</Col>
			<Col md={5}>
				<p>Ing. Daniel Interiano</p>
			</Col>
		</div>
	);
};

export default Footer;
