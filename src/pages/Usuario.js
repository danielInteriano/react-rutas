import { useParams } from 'react-router-dom';

const Usuario = () => {
	let { username } = useParams();

	return (
		<div>
			<h2>Perfil del Usuario</h2>
			<hr />
			<p>
				Bienvenido (a) <b>{username}</b>
			</p>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Usuario;
