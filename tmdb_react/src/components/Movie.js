import React from "react";

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    {
                        props.movie.poster_path == null ? <img src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Fst4.depositphotos.com%2F14953852%2F24787%2Fv%2F600%2Fdepositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&tbnid=sXGK1AzI0U7nIM&vet=12ahUKEwiTwvn-86z0AhU1wbsIHbaiCMMQMygCegUIARCPAQ..i&docid=LDnLiJ-oRy4-NM&w=600&h=600&q=no%20image%20jpg&ved=2ahUKEwiTwvn-86z0AhU1wbsIHbaiCMMQMygCegUIARCPAQ`} alt="card image" style={{ width: "100%", height: 360 }} /> : <img src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} style={{ width: "100%", height: 360 }} />
                    }
                </div>
                {/* <br /> */}
                {/* <span className="card-title"><b>{props.movie.original_title}</b></span>
                <div className="card-content">
                    <p>{props.movie.overview}</p>
                </div> */}
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>

            </div>

        </div>
    )
}
export default Movie;
