import Movie from './Movie';

export default async function Home() {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);
	const data = await res.json();
	console.log(data);

	// 'https://api.themoviedb.org/3/movie/popular/m6Yt77C9u7Aume9dTJMCSRzWDED.jpg'
	return (
		<main>
			<header className='flex flex-col items-center  font-bold text-rose-600 my-5 md:my-8 p-5 md:p-8'>
				<h1 className='flex justify-center text-4xl sm:text-5xl font-bold text-rose-600 my-1 md:my-3'>
					Newest Movies
				</h1>
				<p className=' md:text-xl text-slate-500 p-3 text-center'>
					Check out the newly released movies and choose the best one for you to
					watch in the cinema.
				</p>
			</header>

			<div className='flex justify-center items-center flex-wrap gap-2 w-full max-w-7xl p-2 mx-auto'>
				{data.results.map((movie) => (
					<Movie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster_path={movie.poster_path}
						release_date={movie.release_date}
					/>
				))}
			</div>
		</main>
	);
}
