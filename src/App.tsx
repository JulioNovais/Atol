import React from 'react'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edite <code>src/App.tsx</code> e salve para recarregar.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
)

export default App
