import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const url_movies = "http://localhost:3000/api/v1/movies"
const url_base = "http://localhost:3000"


export default function SingleMovie() {

    const [movie, setMovie] = useState({})

    const { id } = useParams()


    useEffect(() => {
        fetch(`${url_movies}/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movies:', error));

        console.log(movie);


    }, [])

    const { title, director, genre, release_year, abstract, image, reviews } = movie

    return (
        <>
            <section className="movie-details">
                <div className="jumbotron ">
                    <div className="fluid-container p-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-8">
                                <h1 className="text-center">{title}</h1>
                            </div>
                            <div className="col-4">
                                <img src={`${url_base}${image}`} alt={title} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>{title}</h2>
                        </div>

                        <div className="card-body">
                            <p>
                                director: {director}
                            </p>
                            <p>
                                genre: {genre}
                            </p>
                            <p>
                                release year: {release_year}
                            </p>
                            <p>
                                abstract: {abstract}
                            </p>

                            <div className="reviews">
                                {
                                    reviews && reviews.length > 0 ? (reviews.map((review) => (
                                        <div key={review.id} className="card">
                                            <h3>{review.name}</h3>
                                            <p>vote: {review.vote}</p>
                                            <p>review: {review.text}</p>
                                        </div>
                                    )))
                                        :
                                        (
                                            <h4>reviews not found</h4>
                                        )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}