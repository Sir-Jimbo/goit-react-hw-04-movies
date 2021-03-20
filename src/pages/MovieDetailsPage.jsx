import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import moviesApi from '../services/themovie-api';
import routes from '../routes';
import Section from '../Components/Section/Section';
import Spinner from 'Components/Spinner/Spinner';
import MovieNavigation from 'Components/MovieNavigation/MovieNavigation';
import MovieInformation from '../Components/MovieInformation/MovieInformation'
//import s from 'index.css';

const Cast = lazy(
   () => import('../Components/Cast/Cast.jsx' /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(
   () => import('../Components/Reviews/Reviews.jsx' /* webpackChunkName: "reviews-page" */)
);

class MovieDetailsPage extends Component {

   state = { movie: null }

   async componentDidMount() {
      const { match } = this.props
      await moviesApi.fetchMovieDetails(match.params.movieId)
         .then(movie => this.setState({ movie }));
   }

   handleGoBack = () => {
      const { state } = this.props.location
      const { history } = this.props
      if (state && state.from) {
         return history.push(state.from);
      }
      history.push(routes.movies);
   }

   render() {

      const image = `https://image.tmdb.org/t/p/w500`;
      const { match, location } = this.props;
      const { movie } = this.state;

      return (
         <Section>
            <button
               type="button"
               onClick={this.handleGoBack}
            >
               Go back
            </button>
            {
               movie &&
               <>
                  <MovieInformation
                     movie={movie}
                     image={image}
                  />
                  <MovieNavigation
                     match={match}
                     location={location}
                  />
                  <Suspense fallback={<Spinner />}>
                     <Switch>
                        <Route path={routes.cast} component={Cast} />
                        <Route path={routes.reviews} component={Reviews} />
                     </Switch>
                  </Suspense>
               </>
            }
         </Section>
      );
   }
}

export default MovieDetailsPage;
