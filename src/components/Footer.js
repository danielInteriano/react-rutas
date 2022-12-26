import React from 'react';
import { Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className="container">
			<Col md={7}>
				<p>Todos los derechos reservados.</p>
			</Col>
			<Col md={5}>
				<p>Ing. Daniel Interiano</p>
			</Col>
		</div>
	);
};

export default Footer;
