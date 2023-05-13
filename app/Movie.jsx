import Link from 'next/link';
import { BsInfoCircle } from 'react-icons/bs';
import Image from 'next/image';

export default function Movie({ id, title, release_date, poster_path }) {
	const mainPath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
	return (
		<div
			id={id}
			className='flex justify-center relative  my-2 mx-0 overflow-hidden rounded-lg'
		>
			<Link href={`/${id}`}>
				<Image
					src={`${mainPath}${poster_path}`}
					alt={`${title} - Poster`}
					width={300}
					height={500}
				/>
				<div className='group'>
					<BsInfoCircle className='absolute bottom-1 right-1 text-neutral-100 text-3xl z-10' />
					<div className=' absolute bottom-0 p-2 text-center text-white bg-[rgba(0,0,0,0.9)] w-full hidden group-hover:block '>
						<h1>{title}</h1>
						<h2>
							Release date: <span>{release_date}</span>
						</h2>
					</div>
				</div>

				<div className=' absolute bottom-0 top-0 right-0 left-0 bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.2)] '></div>
			</Link>
		</div>
	);
}
