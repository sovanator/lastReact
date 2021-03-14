import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import Like from './common/like'
import Pagination from './common/pagination';
import {paginate} from '../Utils/paginate'

class Movies extends Component {
    constructor(props){
        super(props);
        // this.handleDelete = this.handleDelete.bind(this)
        this.state = {
            movies: getMovies(),
            pageSize: 4,
         currentPage:1} ;
        
    }

   
    handleDelete=(movieId)=>{
        console.log(movieId)
        const movies = this.state.movies.filter(m=>m._id!==movieId)
        this.setState({movies})        
    }

    handleLike=(movie)=>{
        const movies = [...this.state.movies]
        const index =  movies.indexOf(movie)
        movies[index] = {...movies[index]}  
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }

    handlePageChange=(page)=>{
        this.setState({currentPage: page})
    }

    handleTable =(movies)=>{
        return(
            <>
            <h3>Showing {this.state.movies.length} movies in the database</h3>  
                
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie=>(
                                          
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td><Like liked={movie.liked}
                                        onLike={()=>this.handleLike(movie)}
                                         /></td>
                                        <td><button onClick={()=>this.handleDelete(movie._id)} className="btn btn-danger">Delete</button></td>
                                
                                    </tr>
                        ))}        
                    </tbody>
                </table>
                <Pagination 
                itemsCount={this.state.movies.length} 
                pageSize={this.state.pageSize} 
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage} />
            </>
            
        )
    }

   

    render() { 
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize)

        return (
            <React.Fragment>
                {this.state.movies.length ? this.handleTable(movies): <h3>There are no movies in the database</h3>}

            </React.Fragment>

            );
    }
}
 
export default Movies;