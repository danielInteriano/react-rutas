import React from 'react';
import GameCard from './GameCard';

const GameDetail = ({ search, data }) => {
	return (
		<div className="container">
			<div className="row g-3">
				<GameCard />
			</div>
		</div>
	);
};

export default GameDetail;
