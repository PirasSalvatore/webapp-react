import { useState } from "react"


const url_movies = "http://localhost:3000/api/v1/movies"


export default function From({ movieID }) {

    const [userName, setUserName] = useState("")
    const [userVote, setUserVote] = useState(0)
    const [userReview, setUserReview] = useState("")
    const [errorReview, setErrorReview] = useState({})

    function handleSubmit(e) {
        e.preventDefault()

        const review = {
            name: userName,
            vote: userVote,
            review: userReview
        }


        if (!validate(review)) return


        fetch(`${url_movies}/${movieID}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))

    }

    function validate(review) {

        const error = {}

        if (review.name.length === 0) { error.name = "name is required" }
        if (review.name.length > 20) { error.name = "name must be at most 20 characters" }
        if (review.vote < 0 || review.vote > 5) { error.vote = "vote must be between 0 and 5" }
        if (review.review.length === 0) { error.review = "review is required" }
        if (review.review.length > 255) { error.review = "review must be at most 255 characters" }

        return Object.keys(error).length === 0 ? true : setErrorReview(error)
    }

    return (
        <form className="mb-3 bg-black text-white" method="POST" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                aria-describedby="helpId"
                                placeholder="Input your name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Vote</label>
                            <input
                                type="text"
                                className="form-control"
                                name="vote"
                                id="vote"
                                aria-describedby="helpId"
                                placeholder="Input your vote"
                                value={userVote}
                                onChange={(e) => setUserVote(e.target.value)}
                            />
                            <small id="helpId" className="form-text text-muted">enter a number between 0 and 5</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">review</label>
                            <textarea
                                className="form-control"
                                name="review"
                                id="text"
                                rows="3"
                                placeholder="Input your review"
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                            >
                            </textarea>
                        </div>

                    </div>
                    <div className="col-2 col-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}