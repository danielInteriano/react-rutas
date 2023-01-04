import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Modal.css';

const Modal = ({ isOpen, closeModal, id }) => {
	const [juego, setJuego] = useState(null);
	const handleModalContainerClick = (e) => e.stopPropagation();

	//? obtención de todos los datos de un juego en específico
	if (id === null) return;
	let urlGame = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4ba5c7a0e0mshd206777c285a8a1p160349jsn1fc3ea09ca88',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		},
	};

	fetch(urlGame, options)
		.then((res) => res.json())
		.then((res) => {
			setJuego(res);
		})
		.catch((err) => console.error(err));

	console.log({ juego });

	return (
		<article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<Button className="modal-close" variant="danger" onClick={closeModal}>
					X
				</Button>
				<p>Contenido enviado desde el mismo modal.</p>
			</div>
		</article>
	);
};

export default Modal;
