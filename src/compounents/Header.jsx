import { Link } from "react-router-dom"

import { useMoviesProvider } from '../contexts/MoviesContex'


export default function Header() {

    const { setIsLoading } = useMoviesProvider()

    return (
        <header>
            <nav className="navbar d-flex justify-content-between align-items-center px-3">
                <div className="links">
                    <Link to="/" className="btn btn-dark btn-sm" >HOME</Link>
                </div>
                <div className="logo">
                    <Link to="/" >
                        <img src="https://img.freepik.com/premium-photo/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.jpg" alt="" />
                    </Link>
                </div>
            </nav>
        </header >
    )
}