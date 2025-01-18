import PageSkeleton from "./PageSkeleton";
import Currency from '../assets/logo-currency-nis.svg?react'

function Menu() {
	return (<PageSkeleton>
		<div className="flex flex-col gap-10">
			<h1 style={{ fontFamily: 'Thunder', fontSize: '260px' }} className='text-white'>MENU</h1>
			<ul className="text-white list-['×'] text-5xl font-['Thunder']">
				<li className="marker:text-[#75c043] pl-[10px]">
					<span className="inline-flex justify-between w-full">
						<span>GYOZA</span>
						<span className="text-[#75c043]"><Currency className="h-[30px] inline-block" /> 4</span>
					</span>
				</li>
				<li>world</li>
				<li>menu!</li>
			</ul>

		</div>
	</PageSkeleton>);
}

export default Menu;