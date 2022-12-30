import React, { useState } from 'react';
import GameDetail from './GameDetail';
import GameForm from './GameForm';
import Loader from './Loader';

const GameSearch = () => {
	const [search, setSearch] = useState(null);
	const [data, setData] = useState(null);
	const [game, setGame] = useState(null);
	const [loading, setLoading] = useState(false);

	//?función para manejar la información del formulario de búsqueda o filtrado
	const handleSearch = (data) => {
		console.log(data);
	};

	return (
		<div className="row mt-4">
			<h2>GameSearch</h2>
			{loading && <Loader />}
			<GameForm handleSearch={handleSearch} />
			<GameDetail search={search} data={data} />
		</div>
	);
};

export default GameSearch;
