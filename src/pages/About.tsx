import PageSkeleton from "./PageSkeleton";
import Logo from '../assets/icon-positive.svg?react';

function About() {
	return (<PageSkeleton>
		<div className="flex flex-col gap-10 w-[400px] relative">
			<h1 style={{ fontFamily: 'Thunder', fontSize: '260px', lineHeight: "200px" }} className='text-white'>ABT_</h1>

			<Logo className="text-[#75c043] absolute right-[-30px] bottom-[-50px] -scale-x-100 w-[40%] overflow-visible" />

			<p className="text-white">Asian food in Israel is super expensive for some reason, with gyoza usually being a side dish - eating cheap usually means skipping on ordering a plate of gyoza</p>
			<p className="text-white">Gyozilla is hostile to this very idea and aims to both provide cheap accessible gyoza as well as to put a spotlight on the dish - this is simply a gyoza place, nothing more.</p>
			<p className="text-white">Oh, and we also like breakcore ;)</p>

		</div>
	</PageSkeleton>);
}

export default About;