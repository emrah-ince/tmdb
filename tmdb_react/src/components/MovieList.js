import React from "react";
import Movie from './Movie.js';
import Progress from './Progress.js'

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h3>Movies List</h3>
            </div>
            <div className="row">
                {
                    props.done == false ? <Progress /> :
                        <div className="col 12">
                            {
                                props.movies.map((movie, i) => {
                                    return (
                                        <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} movie={movie} />
                                    )
                                })
                            }
                        </div>
                }


            </div>
        </div>
    )
}
export default MovieList;