import './App.css';
import { AnimatePresence, motion } from 'motion/react';
import { Redirect, Route, Switch, useLocation } from 'wouter';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nav from './Nav';
import About from './pages/About';
import Music from './Music';
import { OPEN_DELAY } from './consts';


function App() {
	const [location] = useLocation();


	return (
		<>
			<Nav />
			<motion.div className='absolute left-0 bottom-0 z-20 h-[10vh] flex items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: OPEN_DELAY }}>
				<Music />
			</motion.div>

			<motion.div className='absolute right-0 bottom-0 z-20 h-[10vh] flex flex-col items-end px-8 py-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: OPEN_DELAY }}>
				<div>My, Address, 420</div>
				<div>gyozilla+contact@gmail.com</div>
			</motion.div>

			<AnimatePresence mode='wait'>
				<Switch location={location} key={location}>
					<Route path={"/"} component={Home} />
					<Route path={"/menu"} component={Menu} />
					<Route path={"/about"} component={About} />

					<Redirect to='/' />
				</Switch>
			</AnimatePresence>
		</>
	)
}

export default App
