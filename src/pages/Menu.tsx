import PageSkeleton from "./PageSkeleton";
import Currency from '../assets/currency-nis.svg?react'
import Zigzag from '../assets/zigzag.svg?react'

const items = [
	{ name: 'BEEF', price: 5 },
	{ name: 'CHKN', price: 5 },
	{ name: 'VEG_', price: 4 },
];

function monospaced(text: string) {
	return (
		<>
			{text.split('').map((v, i) => <span key={i} className="w-[1ch] text-center inline-block">{v}</span>)}
		</>
	)
}

function MenuItem({ price, name }: { price: number, name: string }) {
	return (
		<li className="marker:text-[#75c043] pl-[10px]">
			<span className="inline-flex justify-between w-full">
				<span>{monospaced(name)}</span>
				<span className=""><Currency className="h-[30px] inline-block text-[#75c043] translate-x-[10px] translate-y-[4px]" /> {price}</span>
			</span>
		</li>
	)
}

function Menu() {
	return (<PageSkeleton>
		<div className="flex flex-col gap-10">
			<h1 style={{ fontFamily: 'Thunder', fontSize: '260px', lineHeight: "200px" }} className='text-white'>MENU</h1>

			<ul className="text-white list-['×'] text-5xl font-['Thunder']">
				{items.map(item => (
					<MenuItem name={item.name} price={item.price} />
				))}
			</ul>

			<Zigzag className="text-[#75c043]" />

			{/* drinks */}
			<ul className="text-white list-['×'] text-5xl font-['Thunder']">
				<MenuItem name="COKE" price={9} />
			</ul>

		</div>
	</PageSkeleton>);
}

export default Menu;