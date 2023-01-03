import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import GameDetail from './GameDetail';
import GameForm from './GameForm';
import Loader from './Loader';

const GameSearch = () => {
	const [search, setSearch] = useState(null);
	const [data, setData] = useState(null);
	const [game, setGame] = useState(null);
	const [loading, setLoading] = useState(false);

	//? función para el manejo de las peticiones a la API de juegos
	useEffect(() => {
		if (search === null) return;

		const fetchData = async () => {
			const { categoria, plataforma } = search;

			let api = helpHttp();
			let urlGame = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataforma}&category=${categoria}`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '4ba5c7a0e0mshd206777c285a8a1p160349jsn1fc3ea09ca88',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
				},
			};

			setLoading(true);

			api.get(urlGame, options).then((res) => {
				if (!res.err) {
					console.log(res);
					setData(res);
				} else {
					setData(null);
				}
			});
			setLoading(false);
		};

		fetchData();
	}, [search]);

	//?función para manejar la información del formulario de búsqueda o filtrado
	const handleSearch = (data) => {
		setSearch(data);
	};

	return (
		<div className="row mt-4">
			<h2>GameSearch</h2>
			{loading && <Loader />}
			<GameForm handleSearch={handleSearch} />
			{search && !loading && <GameDetail search={search} data={data} />}
		</div>
	);
};

export default GameSearch;
