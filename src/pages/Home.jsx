import { useEffect, useState } from 'react';

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
                            <div key={movie.id} className="col">
                                <div className="card">
                                    <div className='card-image'>
                                        <img src={movie.image} className="card-img-top" alt={movie.title} />
                                    </div>

                                    <div className="card-body">
                                        <ul className='List-unstyled'>
                                            <li className='card-title'>{movie.title}</li>
                                            <li className='card-text'>Release Year: {movie.release_year}</li>
                                            <li className='card-text'>Director: {movie.director}</li>
                                            <li className='card-text'>Genre: {movie.genre}</li>
                                            <li className='card-text'>Description: {movie.abstract}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}