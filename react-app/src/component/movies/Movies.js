import React from "react";
import Movie from "./Movie";
import axios from "axios";

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {movies: []};
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/movies")
        .then((res) => {
            this.setState({movies: res.data});
        })
        .catch((e) => {
            if(e) {
                alert("Unable to fetch movies!");
                this.setState({movies: []});
            }
        })
    }

    
    render() {
        return (
            <div className="row">
                {
                    this.state.movies.map((movie, i) => {
                        return <Movie key = {i} name={movie.name} rating={movie.rating} releaseDate={movie.releaseDate} />
                    })
                }
            </div>
            
        )
    }

}

export default Movies;