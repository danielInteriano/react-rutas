import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
	name: '',
	constelacion: '',
	id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm);
	let navigate = useNavigate();

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.name || !form.constelacion) {
			alert('Datos incompletos');
			return;
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
		setDataToEdit(null);
		navigate('/');
	};

	return (
		<div>
			<h3 className="mt-3 mb-3">
				{dataToEdit ? 'Editar un Caballero del Zodiaco' : 'Agregar un Caballedo del Zodiaco'}
			</h3>
			<hr />

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.name}
				></input>
				<input
					type="text"
					name="constelacion"
					placeholder="Constelación"
					onChange={handleChange}
					value={form.constelacion}
				></input>
				<input type="submit" value="Enviar"></input>
				<input type="reset" value="Limpiar" onClick={handleReset}></input>
			</form>
		</div>
	);
};

export default CrudForm;
