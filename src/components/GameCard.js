import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from './Modal';
import { useModal } from './useModal';

const GameCard = ({ id, thumbnail, title, developer, short_description, genre, publisher }) => {
	const [isOpenModal, openModal, closeModal] = useModal(false);

	return (
		<div className="col-sm-6 col-md-4 col-lg-4 col-xl-3" id={id}>
			<div className="card text-bg-dark border-danger h-100">
				<img src={thumbnail} className="card-img-top" alt="No imagen" />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{developer}</h6>
					<p className="card-text">{short_description}</p>
				</div>
				<div className="card-body">
					<p className="card-subtitle text-muted">Género</p>
					<h5 className="card-title mb-4">{genre}</h5>
					<p className="card-subtitle text-muted">Editor</p>
					<h5 className="card-title">{publisher}</h5>
				</div>
				<div className="card-footer d-flex justify-content-center my-auto mx-auto">
					<button
						type="button"
						className="btn btn-outline-primary bi bi-trash3-fill"
						onClick={openModal}
					>
						<i className="bi bi-eye align-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-eye align-baseline"
								viewBox="0 0 16 16"
							>
								<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
								<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
							</svg>
						</i>
						{'  Detalle'}
					</button>
					<button type="button" className="btn btn-outline-danger mx-2">
						<i className="bi bi-trash3-fill align-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-trash3-fill align-baseline"
								viewBox="0 0 16 16"
							>
								<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
							</svg>
						</i>
						{'  Eliminar'}
					</button>
				</div>
			</div>

			{/* Modal de cada card*/}
			<Container>
				<Modal isOpen={isOpenModal} closeModal={closeModal} id={id}></Modal>
			</Container>
		</div>
	);
};

export default GameCard;
