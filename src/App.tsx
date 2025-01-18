import './App.css';
import { AnimatePresence } from 'motion/react';
import { Redirect, Route, Switch, useLocation } from 'wouter';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nav from './Nav';



function App() {
	const [location] = useLocation();


	return (
		<>
			<Nav />

			<AnimatePresence mode='wait'>
				<Switch location={location} key={location}>
					<Route path={"/"} component={Home} />
					<Route path={"/menu"} component={Menu} />
					<Route path={"/about"} component={Menu} />

					<Redirect to='/' />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
