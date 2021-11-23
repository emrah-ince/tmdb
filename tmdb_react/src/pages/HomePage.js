import React, { Component } from 'react'
import SearchArea from '../components/SearchArea.js';
import PopularMovieList from '../components/PopularMovieList.js';
import Pagination from '../components/Pagination.js';
import MovieInfo from '../components/MovieInfo.js'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null,
            done: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ done: false });
        fetch(`https://localhost:44306/api/popularmovie/getbyquery?query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], totalResults: data.total_results })
            });
        this.setState({ done: true });
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    nexPage = (pageNumber) => {
        this.setState({ done: false });
        fetch(`https://localhost:44306/api/popularmovie/getbypage?pageid=${pageNumber}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], currentPage: pageNumber })
            });
        this.setState({ done: true });
    }

    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id == id)

        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

        this.setState({ currentMovie: newCurrentMovie })
    }

    closeMovieInfo = () => {
        this.setState({ currentMovie: null })
    }

    componentDidMount() {
        this.setState({ done: false });
        fetch(`https://localhost:44306/api/popularmovie/getbyquery?query`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results], totalResults: data.total_results })
            });
        this.setState({ done: true });
    }

    render() {
        const numberPages = Math.floor(this.state.totalResults / 20);

        return (
            <div>
                {this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} /><PopularMovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} done={this.state.done} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
                {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nexPage} currentPage={this.state.currentPage} /> : ''}
            </div>
        )
    }
}
export default HomePage;