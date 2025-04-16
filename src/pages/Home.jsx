import { useEffect, useState } from 'react';
import MoviesCard from '../Compounent/MoviesCard';

const url_movies = "http://localhost:3000/api/v1/movies"

export default function Home() {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetch(url_movies)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));

    }, [])


    return (
        <div className='container'>
            <section className="movies-list">
                <h1>Movie List</h1>

                <div className="movies-grid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {movies.map((movie) => (
                            <MoviesCard key={movie.id} movie={movie} />
                        ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}