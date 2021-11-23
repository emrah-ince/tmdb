import React from "react";

const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
                <i className="fas fa-arrow-left"></i>
                <span style={{ marginLeft: 10 }}>Go back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {props.currentMovie.poster_path == null ? <img src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Fst4.depositphotos.com%2F14953852%2F24787%2Fv%2F600%2Fdepositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fno-image-available.html&tbnid=sXGK1AzI0U7nIM&vet=12ahUKEwiTwvn-86z0AhU1wbsIHbaiCMMQMygCegUIARCPAQ..i&docid=LDnLiJ-oRy4-NM&w=600&h=600&q=no%20image%20jpg&ved=2ahUKEwiTwvn-86z0AhU1wbsIHbaiCMMQMygCegUIARCPAQ`} alt="card image" style={{ width: "100%", height: 360 }} /> :
                        <img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} style={{ width: "100%", height: 360 }} />}
                </div>
                <div className="col s12 m8">
                    <div className="info-container">
                        <p>{props.currentMovie.original_title}</p>
                        <p>{props.currentMovie.vote_average}/10</p>
                        <p><b>Summary</b></p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;