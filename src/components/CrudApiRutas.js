import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Error404 from './Error404';
import Loader from './Loader';
import Message from './Message';

const CrudApiRutas = () => {
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
	}, [url, api]);

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
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Nav className="me-auto">
						<Link to="/" className="btn btn-outline-light me-2">
							Caballeros Home
						</Link>
						<Link to="/agregar" className="btn btn-outline-light me-2">
							Agregar
						</Link>
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							{loading && <Loader />},
							{error && (
								<Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
							)}
							{db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
						</>
					}
					errorElement={<Error404 />}
				></Route>

				<Route
					exact
					path="/agregar"
					element={
						<CrudForm
							createData={createData}
							updateData={updateData}
							dataToEdit={dataToEdit}
							setDataToEdit={setDataToEdit}
						></CrudForm>
					}
					errorElement={<Error404 />}
				></Route>

				<Route
					exact
					path="/editar/:id"
					element={
						<CrudForm
							createData={createData}
							updateData={updateData}
							dataToEdit={dataToEdit}
							setDataToEdit={setDataToEdit}
						></CrudForm>
					}
					errorElement={<Error404 />}
				></Route>
			</Routes>
		</div>
	);
};

export default CrudApiRutas;
