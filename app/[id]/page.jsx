import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
export default async function MovieDetail({ params }) {
	const mainPath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
	const backdropPath = 'https://www.themoviedb.org/t/p/original';
	const { id } = params;

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
	);
	const data = await res.json();
	console.log(data);

	return (
		<div className=' relative red_gradient h-full z-0'>
			<div className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.7)] -z-20' />
			<div className='w-full max-w-7xl mx-auto py-10 z-10'>
				<div className='flex flex-col justify-center md:flex-row p-2 md:p-10 text-gray-100'>
					<div className='flex justify-center md:block rounded-md overflow-hidden px-4 sm:p-0'>
						<Image
							src={`${mainPath}${data.poster_path}`}
							alt={data.title}
							width={350}
							height={400}
							className='rounded-md'
						/>
					</div>
					<div className='p-4 sm:p-8 '>
						<h1 className='text-xl md:text-3xl font-bold'>{data.title}</h1>
						<p className=' text-xl md:text-3xl text-slate-300 my-2'>{`(${data.release_date.slice(
							0,
							4
						)})`}</p>
						<p className='flex flex-col md:flex-row  my-4 '>
							{data.release_date}
							<ul className='flex flex-col md:flex-row'>
								&nbsp;{` • `}&nbsp;
								<li>
									{data.genres.map((genre) =>
										data.genres.length === data.genres.indexOf(genre) + 1
											? genre.name
											: genre.name + ', '
									)}
								</li>
								&nbsp;{` • `}&nbsp;
								<li>{data.runtime} minutes</li>
							</ul>
						</p>
						<div className='flex p-2 my-6 items-center'>
							<div>
								<AiFillStar className='text-5xl text-yellow-500 mx-2' />
							</div>
							<div className='text-center flex gap-2 items-center text-white'>
								<p className='text-3xl font-bold'>
									{data.vote_average.toFixed(1)}
								</p>
								<p className='flex flex-col my-0 mx-2'>
									{data.vote_count} <span>ocen</span>
								</p>
								<p></p>
							</div>
						</div>
						<p className='my-2 text-orange-200'>
							{data.tagline && `❝${data.tagline}❞`}
						</p>

						<div className='my-6'>
							<h2 className='font-bold my-1 text-lg'>Overview</h2>
							<p className=' max-w-2xl'>{data.overview}</p>
						</div>
						{data.homepage ? (
							<div>
								<Link href={data.homepage}>
									<p className='text-lg  text-amber-300 px-2 cursor-pointer'>
										Homepage{' '}
									</p>
								</Link>
							</div>
						) : (
							false
						)}
					</div>
				</div>

				<div className='w-full lg:h-[650px] my-5 md:my-16 relative overflow-hidden lg:rounded-xl'>
					<Image
						className='transform scale-150 my-10 sm:scale-100 sm:my-5 lg:rounded-xl'
						src={backdropPath + data.backdrop_path}
						alt='sds'
						width={4000}
						height={2000}
						priority
					></Image>
				</div>
			</div>
		</div>
	);
}
