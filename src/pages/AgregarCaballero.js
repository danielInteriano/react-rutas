import { useEffect, useState } from 'react';
import CrudForm from '../components/CrudForm';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { helpHttp } from '../helpers/helpHttp';

const AgregarCaballero = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let api = helpHttp();
	let url = 'http://localhost:3001/santos';

	useEffect(() => {
		setLoading(true);
		api.get(url).then((res) => {
			if (!res.err) {
				setDb(res);
				setError(null);
				//console.log(res);
			} else {
				setDb(null);
				setError(res);
			}
			setLoading(false);
		});
	}, [url]);

	const createData = (data) => {
		data.id = Date.now();

		let options = { body: data, headers: { 'content-type': 'application/json' } };

		api.post(url, options).then((res) => {
			console.log(res);
			if (!res.err) {
				setDb([...db, res]);
			} else {
				setError(res);
			}
		});
	};

	const updateData = (data) => {
		let endpoint = `${url}/${data.id}`;

		let options = { body: data, headers: { 'content-type': 'application/json' } };

		api.put(endpoint, options).then((res) => {
			if (!res.err) {
				let newData = db.map((el) => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};

	return (
		<div className="space-foot">
			<h3 className="margen-superior">
				{dataToEdit ? 'Agregar un Caballero del Zodiaco' : 'Editar un Caballero del Zodiaco'}
			</h3>
			<hr />
			<CrudForm
				createData={createData}
				updateData={updateData}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			></CrudForm>
			{loading && <Loader></Loader>}
			{error && (
				<Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"></Message>
			)}
		</div>
	);
};

export default AgregarCaballero;
