import { useEffect, useState } from 'react';
import CrudTable from '../components/CrudTable';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { helpHttp } from '../helpers/helpHttp';

const TablaCaballeros = () => {
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
			} else {
				setDb(null);
				setError(res);
			}
			setLoading(false);
		});
	}, [url]);

	const deleteData = (id) => {
		let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id '${id}'?`);

		if (isDelete) {
			let endpoint = `${url}/${id}`;
			let options = { headers: { 'content-type': 'application/json' } };

			api.del(endpoint, options).then((res) => {
				if (!res.err) {
					let newData = db.filter((el) => el.id !== id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	return (
		<div className="space-foot">
			<h3 className="margen-superior">Caballeros del Zodiaco</h3>
			<hr />
			{loading && <Loader></Loader>}
			{error && (
				<Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"></Message>
			)}
			{db && (
				<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTable>
			)}
		</div>
	);
};

export default TablaCaballeros;
