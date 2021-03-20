import Spinner from 'Components/Spinner/Spinner';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import routes from './routes';

const HomePage = lazy(() => import('./pages/HomePage.jsx' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx' /* webpackChunkName: "error-page" */));

const App = () => (
  <Layout>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Layout >
);

export default App;