
export default function Error500() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 text-center">
                    <h1 className="text-danger">500</h1>
                    <h2 className="text-warning">Internal Server Error</h2>
                    <p className="text-muted">Something went wrong on our end. Please try again later.</p>
                </div>
            </div>
        </div>
    )
}