
import { createContext, useContext, useState, useEffect } from "react"

const url_movies = "http://localhost:3000/api/v1/movies"

const MoviesContext = createContext()

function MoviesProvider({ children }) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url_movies)
            .then(response => response.json())
            .then(data => setMovies(data))
            .finally(() => setIsLoading(false))
            .catch(error => setError(500));
    }, [])

    return (
        <MoviesContext.Provider value={{ movies, isLoading, error }}>
            {children}
        </MoviesContext.Provider>
    )
}

function useMoviesProvider() {
    return useContext(MoviesContext)
}

export { useMoviesProvider, MoviesProvider }