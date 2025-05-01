import { Link } from "react-router-dom"

import { useContext } from 'react'
import GlobalContext from '../contexts/GlobalContex'


export default function Header() {

    const { setIsLoading } = useContext(GlobalContext)

    return (
        <header>
            <nav className="navbar d-flex justify-content-between align-items-center px-3">
                <div className="links">
                    <Link to="/" className="btn btn-dark btn-sm" onClick={() => { setIsLoading(true) }}>HOME</Link>
                </div>
                <div className="logo">
                    <Link to="/" onClick={() => { setIsLoading(true) }}>
                        <img src="https://img.freepik.com/premium-photo/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.jpg" alt="" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}