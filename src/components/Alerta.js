import React from 'react';

const Alerta = ({ setAlerta, mensaje, descripcion }) => {
	const cambioAlerta = () => {
		setAlerta(false);
	};

	return (
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>!{mensaje}!</strong> {descripcion}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				onClick={cambioAlerta}
			></button>
		</div>
	);
};

export default Alerta;
