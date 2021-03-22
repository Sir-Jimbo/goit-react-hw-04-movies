import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from '../Components/SearchBox/SearchBox';
import getQueryParams from '../utils/getQueryParams'
import moviesApi from '../services/themovie-api';
import MoviesPageList from '../Components/MoviesPageList/MoviesPageList';
import Section from '../Components/Section/Section';
import Spinner from '../Components/Spinner/Spinner'


class MoviesPage extends Component {

   state = {
      movies: [],
      loading: false,
      error: null
   }

   async componentDidMount() {
      try {
         const { query } = await getQueryParams(this.props.location.search);
         if (query) {
            return this.fetchMovies(query);
         }
      }
      catch (e) {
         return 'Movie is not found';
      }
   }

   componentDidUpdate(prevProps, prevState) {

      const { query: prevQuery } = getQueryParams(prevProps.location.search);
      const { query: nextQuery } = getQueryParams(this.props.location.search);
      if (prevQuery !== nextQuery) {
         this.fetchMovies(nextQuery);
      }
   }

   fetchMovies = query => {
      this.setState({ loading: true });

      moviesApi.fetchMoviesWithQuery(query)
         .then(movies => {
            if (movies.length === 0) {
               toast.error('Didn`t find the movies...');
            }
            this.setState({ movies });
         })
         .catch(error => {
            toast.error(error.message);
            this.setState({ error: error.message });
         })
         .finally(() => this.setState({ loading: false }));
   }

   handleChangeQuery = query => {
      this.props.history.push({
         ...this.props.location,
         search: `query=${query}`,
      });
   };

   render() {

      const { movies, loading } = this.state;

      return (
         <Section>
            < SearchBox onSubmit={this.handleChangeQuery} />
            {
               movies.length > 0 && (
                  loading
                     ? <Spinner />
                     : <MoviesPageList movies={movies} />
               )
            }
            <ToastContainer />
         </Section>
      );
   }
}

export default MoviesPage;