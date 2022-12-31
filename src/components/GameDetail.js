import React from 'react';
import Alerta from './Alerta';
import GameCard from './GameCard';

const GameDetail = ({ search, data }) => {
	let games = data;

	if (!data) return null;

	return (
		<div className="container">
			<div className="row g-3">
				{data.error || data.name === 'AbortError' ? (
					<Alerta
						mensaje={'Error'}
						descripcion={`Hubo de petición de datos. Nada que mostrar para categoría: ${search.categoria} y plataforma:${search.plataforma}`}
						tipo={'danger'}
					/>
				) : (
					<GameCard games={games} />
				)}
			</div>
		</div>
	);
};

export default GameDetail;
