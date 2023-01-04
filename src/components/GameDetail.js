import React from 'react';
import Alerta from './Alerta';
import GameCard from './GameCard';

const GameDetail = ({ search, data }) => {
	let games = data;
	let { categoria, plataforma } = search;

	if (!data) return null;

	return (
		<div className="container">
			<div className="row gy-3 gx-3">
				{data.error || data.name === 'AbortError' ? (
					<Alerta
						mensaje={'Error'}
						descripcion={`Hubo de petición de datos. Nada que mostrar para categoría: ${categoria} y plataforma:${plataforma}`}
						tipo={'danger'}
					/>
				) : (
					games.map(
						(game) =>
							categoria === game.genre && (
								<GameCard
									key={game.id}
									id={game.id}
									thumbnail={game.thumbnail}
									title={game.title}
									developer={game.developer}
									short_description={game.short_description}
									genre={game.genre}
									publisher={game.publisher}
								/>
							)
					)
				)}
			</div>
		</div>
	);
};

export default GameDetail;
