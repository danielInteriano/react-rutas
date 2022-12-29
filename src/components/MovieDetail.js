import React from 'react';
import MovieCard from './MovieCard';

const MovieDetail = ({ search, data }) => {
	return (
		<div className="container">
			<div className="row g-3">
				<MovieCard />
			</div>
		</div>
	);
};

export default MovieDetail;
