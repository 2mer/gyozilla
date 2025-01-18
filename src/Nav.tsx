import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useRoute, Link } from "wouter";
import { OPEN_DELAY } from "./consts";
import Logo from './assets/logo-positive-no-slogan.svg?react';

const Routes = {
	'HOME': {
		path: '/',
		name: 'HOME',
	},
	'MENU': {
		path: '/menu',
		name: 'MENU',
	},
	'ABOUT': {
		path: '/about',
		name: 'ABOUT',
	},


}

function Nav() {
	const [, params] = useRoute('/:route')
	const currentRoute = params?.route ? `/${params?.route}` : '/';

	return (
		<>
			<motion.div className="absolute top-0 left-0 h-[10vh] z-20 flex flex-1 gap-12 px-6 py-4 items-center justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: OPEN_DELAY }}>
				<Logo className="h-[60%]" />
			</motion.div>

			<motion.div className="absolute top-0 right-0 h-[10vh] z-20 flex flex-1 gap-12 px-8 py-4 items-center justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: OPEN_DELAY }}>
				{Object.values(Routes).map(r => {
					const isSelected = r.path === currentRoute;

					return (
						<Link key={r.path} to={r.path} className={twMerge(
							"font-['Thunder'] text-3xl w-[100px] flex text-center justify-center align-middle items-center transition-all",
							"hover:tracking-widest",
							// "active:scale-75",
							"active:font-bold",
							`
										before:content-['×']
										before:font-['Thunder']
										before:text-3xl
										before:transition-opacity
										after:content-['×']
										after:font-['Thunder']
										after:text-3xl
										after:transition-opacity
										`,
							!isSelected && `
										before:opacity-0
										after:opacity-0
										`
						)}>{r.name}</Link>

					)
				})}
			</motion.div>
		</>
	);
}

export default Nav;