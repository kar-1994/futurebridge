function Movie(props) {
    return (
        <div className="card col-sm-3 movie-card">
            <div className="card-header movie-header">
                <h3>{props.name}</h3>
            </div>
            <div className="card-body movie-body">
                <h6>Rating: {props.rating}</h6>
            </div>
            <div className="card-footer movie-footer">
                <span><i>Release Date: {props.releaseDate}</i></span>
            </div>
        </div>
    )
}

export default Movie;