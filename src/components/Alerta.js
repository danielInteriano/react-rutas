import React from 'react';

const Alerta = ({ setAlerta, mensaje, descripcion, tipo }) => {
	const cambioAlerta = () => {
		setAlerta(false);
	};

	return (
		<div className={`alert alert-${tipo} alert-dismissible fade show`} role="alert">
			<div>
				<strong>{mensaje}</strong> {descripcion}
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					onClick={cambioAlerta}
				></button>
			</div>
		</div>
	);
};

export default Alerta;
