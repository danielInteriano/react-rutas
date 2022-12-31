import React, { useState } from 'react';
import Alerta from './Alerta';

//?Objeto para inicializar formulario
const initialForm = {
	categoria: '',
	plataforma: '',
};

const GameForm = ({ handleSearch }) => {
	const [form, setForm] = useState(initialForm);
	const [alerta, setAlerta] = useState(false);

	let platform = [{ nombre: 'pc' }, { nombre: 'browser' }];
	let category = [
		{ name: 'mmorpg' },
		{ name: 'shooter' },
		{ name: 'strategy' },
		{ name: 'moba' },
		{ name: 'racing' },
		{ name: 'sports' },
		{ name: 'social' },
		{ name: 'sandbox' },
		{ name: 'open-world' },
		{ name: 'survival' },
		{ name: 'pvp' },
		{ name: 'pve' },
		{ name: 'pixel' },
		{ name: 'voxel' },
		{ name: 'zombie' },
		{ name: 'turn-based' },
		{ name: 'first-person' },
		{ name: 'third-person' },
		{ name: 'top-down' },
		{ name: 'tank' },
		{ name: 'space' },
		{ name: 'sailing' },
		{ name: 'side-scroller' },
		{ name: 'superhero' },
		{ name: 'permadeath' },
		{ name: 'card' },
		{ name: 'battle-royale' },
		{ name: 'mmo' },
		{ name: 'mmofps' },
		{ name: 'mmotps' },
		{ name: '3d' },
		{ name: '2d' },
		{ name: 'anime' },
		{ name: 'fantasy' },
		{ name: 'sci-fi' },
		{ name: 'fighting' },
		{ name: 'action-rpg' },
		{ name: 'action' },
		{ name: 'military' },
		{ name: 'martial-arts' },
		{ name: 'flight' },
		{ name: 'low-spec' },
		{ name: 'tower-defense' },
		{ name: 'horror' },
		{ name: 'mmorts' },
	];

	//? función que maneja el cambio de los select
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	//? función que maneja el evento clic del input enviar
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.categoria || !form.plataforma) {
			setAlerta(true);
			return;
		}

		//console.log(form);
		handleSearch(form);
		setForm(initialForm);
	};

	console.log(form.value);
	return (
		<div className="col-md-6 col-12">
			<h2>Buscador de Películas</h2>
			<hr />
			<form onSubmit={handleSubmit}>
				<label className="mx-2" name="plataforma">
					Plataforma
				</label>
				<select
					id="select-platform"
					className="form-select mb-2"
					name="plataforma"
					onChange={handleChange}
					value={form.plataforma}
				>
					<option>Seleccione</option>
					{platform.map((el, index) => (
						<option key={'platform' + index} value={el.nombre}>
							{el.nombre}
						</option>
					))}
				</select>
				<label className="mx-2" name="categoria">
					Categoría
				</label>
				<select
					id="select-category"
					className="form-select mb-4"
					name="categoria"
					onChange={handleChange}
					value={form.categoria}
				>
					<option>Seleccione</option>
					{category.map((el, index) => (
						<option key={'category' + index} value={el.name}>
							{el.name}
						</option>
					))}
				</select>
				<input type="submit" className="btn btn-outline-primary mb-4" placeholder="Enviar" />

				{alerta && (
					<Alerta
						setAlerta={setAlerta}
						mensaje={'Cuidado'}
						descripcion={'Hay datos que debes seleccionar.'}
						tipo={'warning'}
					/>
				)}
			</form>
		</div>
	);
};

export default GameForm;
