import React from "react";
import Movie from './Movie.js';
import Progress from './Progress.js'

const PopularMovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h3>Most Popular Movies List</h3>
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
export default PopularMovieList;













