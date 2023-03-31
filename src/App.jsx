import './App.css'

import { Routes,Route } from 'react-router-dom'

import Home from './routes/Home'

function App() {

	return (
		<div className="App min-h-screen grid place-items-center bg-primary">
			<Routes>
				<Route path='/' element={<Home/>}/>
			</Routes>
		</div>
	)
}

export default App
