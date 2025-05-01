import MoviesCard from '../Compounent/MoviesCard';
import Error500 from '../Error/Error500';

import { useMoviesProvider } from '../contexts/MoviesContex'

export default function Home() {

    const { movies, error } = useMoviesProvider()

    return (
        <>
            <div className='container'>
                <section className="movies-list">
                    <h1>Movie List</h1>

                    {error === 500 ? <Error500 /> :
                        (
                            <div className="movies-grid">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {movies.map((movie) => (
                                        <MoviesCard key={movie.id} movie={movie} />
                                    ))
                                    }
                                </div>
                            </div>
                        )
                    }

                </section>
            </div>
        </>

    )
}