import React, { useState } from 'react';
import Loader from './Loader';
import MovieDetail from './MovieDetail';
import MovieForm from './MovieForm';

const MovieSearch = () => {
	const [search, setSearch] = useState(null);
	const [data, setData] = useState(null);
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(false);

	//?función para manejar la información del formulario de búsqueda o filtrado
	const handleSearch = (data) => {
		console.log(data);
	};

	return (
		<div className="mt-4">
			<h2>MovieSearch</h2>
			{loading && <Loader />}
			<MovieForm handleSearch={handleSearch} />
			<MovieDetail search={search} data={data} />
		</div>
	);
};

export default MovieSearch;
