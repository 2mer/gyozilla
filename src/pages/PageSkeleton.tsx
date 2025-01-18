import { PropsWithChildren } from "react";
import jawUp from '../assets/jaw-up.svg'
import jawDown from '../assets/jaw-down.svg'
import { motion } from 'motion/react'
import { OPEN_DELAY } from "../consts";


function PageSkeleton({ children }: PropsWithChildren<{}>) {

	return (
		<div className='flex flex-col h-full w-full relative overflow-hidden'>
			<motion.div className='absolute top-0 flex flex-col w-full z-10' initial={{ y: '40vh' }} animate={{ y: '0%' }} exit={{ y: '40vh' }} transition={{ delay: OPEN_DELAY }}>
				<div className='bg-[#75c043] w-[100vw] h-[100vw] absolute bottom-[99%]' />
				<div className='flex items-stretch'>
					<div className='bg-[#75c043] flex-1' />

					<img src={jawUp} className="h-[10vh]" alt="Vite logo" />

					<div className='bg-[#75c043] flex-1 flex' />
				</div>
			</motion.div>

			<motion.div className='flex flex-1 justify-center items-center overflow-auto relative' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: OPEN_DELAY }}>
				{/* content */}
				{children}
			</motion.div>

			<motion.div className='absolute bottom-0 flex items-stretch w-full z-10' initial={{ y: '-43vh' }} animate={{ y: '0%' }} exit={{ y: '-43vh' }} transition={{ delay: OPEN_DELAY }}>
				<div className="flex items-stretch w-full">
					<div className='bg-[#75c043] flex-1' />
					<motion.img src={jawDown} className="h-[10vh]" alt="Vite logo" />
					<div className='bg-[#75c043] flex-1' />
				</div>
				<div className='bg-[#75c043] w-[100vw] h-[100vw] absolute top-[99%]' />

			</motion.div>

		</div>
	);
}

export default PageSkeleton;