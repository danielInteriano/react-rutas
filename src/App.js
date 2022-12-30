import { Container } from 'react-bootstrap';
import './App.css';
import GameSearch from './components/GameSearch';

function App() {
	return (
		<Container>
			{/* <h1>CRUD API CON RUTAS</h1>
			<a href="https://reactrouter.com/en/6.5.0" target="_blank" rel="noreferrer">
				Documentación React
			</a>
			<hr />
			<CrudApiRutas /> */}

			{/*En este ejercicios se hicieron otro tipo de ejercicios relacionados con el manejo de rutas.
				Se trabajo con menus, y con un componente router donde se definieron las rutas utilizadas.
				El propósito fue trabajar con el componente Outlet y varias enrutadores anidados. Para poder
				ver todos los ejericcios en el archivo index.js se debe hacer la siguiente
				modificación:

				 const root = ReactDOM.createRoot(document.getElementById('root')); 
					root.render(
						<React.StrictMode>
							<RouterProvider router={Router}/>
						</React.StrictMode>
					); 
			*/}
			{/*En el ejercicio que se muestra a continuación se hizo una App que busca peliculas y las guarda
			 como favoritas en localStorage si así lo desea el cliente*/}
			<GameSearch />
		</Container>
	);
}

export default App;
