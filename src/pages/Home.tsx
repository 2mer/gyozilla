import PageSkeleton from "./PageSkeleton";
import { Link } from "wouter";
import Logo from '../assets/icon-positive.svg?react'

function Home() {
	return (<PageSkeleton>
		<div className="flex flex-col relative">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<h1 style={{ fontFamily: 'Thunder', fontSize: '40px', lineHeight: "40px" }} className='text-white'>WE_</h1>
					<h1 style={{ fontFamily: 'Thunder', fontSize: '40px', lineHeight: "40px" }} className='text-white'>GOT</h1>
				</div>

				<div className="font-['Thunder'] text-[100px] text-[#75c043]">$$$</div>
				<div className="font-['Thunder'] text-[100px] text-white">CHEAP</div>
				{/* <span className="inline-flex flex-col">
					<div className="flex font-mono text-3xl font-bold text-white">CHEAP</div>
					<div className="flex font-mono text-3xl text-[#75c043]">$$$$$</div>
				</span> */}
			</div>
			{/* <h1 style={{ fontFamily: 'Thunder', fontSize: '100px', lineHeight: "100px" }} className='text-white'>GOT</h1> */}
			<h1 style={{ fontFamily: 'Thunder', fontSize: '260px', lineHeight: "240px" }} className='text-white'>GYOZ</h1>

			<div className="flex justify-between items-start">
				<h1 style={{ fontFamily: 'Thunder', fontSize: '260px', lineHeight: "200px" }} className='text-white'>A</h1>


				<Link to={'/menu'} className="text-black bg-[#75c043] p-4 font-['Thunder'] text-3xl transition-all hover:saturate-50 active:font-bold mt-[-20px] h-[182px] w-[250px] flex items-center justify-center">
					<div className="flex gap-4 items-center">
						<div>SHOW ME THE MENU</div>
						<Logo className="logo-black text-black -scale-x-100 fill-black" />
					</div>
				</Link>
			</div>


		</div>
	</PageSkeleton>);
}

export default Home;