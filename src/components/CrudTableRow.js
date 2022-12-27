import React from 'react';
import { useNavigate } from 'react-router-dom';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
	let { name, constelacion, id } = el;
	let navigate = useNavigate();

	const handleEdit = () => {
		setDataToEdit(el);
		navigate(`/editar/${id}`);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{constelacion}</td>
			<td>
				<button onClick={handleEdit}>Editar</button>
				<button onClick={() => deleteData(id)}>Eliminar</button>
			</td>
		</tr>
	);
};

export default CrudTableRow;
