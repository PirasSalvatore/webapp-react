import { Link } from "react-router-dom"
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContex'

const url_base = "http://localhost:3000"

export default function MoviesCard({ movie }) {

    const { title, director, genre, release_year, abstract, image } = movie
    const { setIsLoading } = useContext(GlobalContext)

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/SingleMovie/${movie.id}`} className="card-link" onClick={() => { setIsLoading(true) }}>

                    <img src={`${url_base}${image}`} className="card-img-top" alt={title} />
                </Link>

                <div className="card-body">
                    <ul className='list-unstyled'>
                        <li className='card-title'>{title}</li>
                        <li className='card-text'>Release Year: {release_year}</li>
                        <li className='card-text'>Director: {director}</li>
                        <li className='card-text'>Genre: {genre}</li>
                        <li className='card-text'>Description: {abstract}</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}