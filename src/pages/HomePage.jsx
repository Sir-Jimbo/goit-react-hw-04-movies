import React, { Component } from 'react';
import { toast } from 'react-toastify';
import moviesApi from '../services/themovie-api';
import TrendingList from '../Components/TrendingList/TrendingList';
import Section from '../Components/Section/Section';
import Spinner from '../Components/Spinner/Spinner'


class HomePage extends Component {

   state = {
      movies: [],
      loading: false,
      error: null
   }

   async componentDidMount() {
      try {
         return this.fetchMovies();
      }
      catch (e) {
         return 'Movies is not found';
      }
   }

   fetchMovies = () => {
      this.setState({ loading: true });

      moviesApi.fetchTrendingMovies()
         .then(movies => this.setState({ movies }))
         .catch(error => {
            toast.error(error.message);
            this.setState({ error: error.message });
         })
         .finally(() => this.setState({ loading: false }));
   }

   render() {
      const { movies, loading } = this.state;
      const { location } = this.props;
      return (
         <Section>
            {
               loading
                  ? <Spinner />
                  : <TrendingList
                     movies={movies}
                     location={location}
                  />
            }
         </Section >
      );
   }
}


export default HomePage;