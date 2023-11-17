import './App.scss'
import Nav from './components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div>
				<Nav />
			</div>
		</Router>
	)
}

export default App
