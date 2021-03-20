import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import s from './TrendingList.module.css'


const TrendingList = ({ movies, location }) => {

   return (
      <>
         <h1 className={s.title}>Trending today</h1>
         <ul className={s.list}>
            {movies.map(movie => (
               <li
                  key={movie.id}
                  className={s.item}
               >
                  <Link
                     to={{
                        pathname: `${routes.movies}/${movie.id}`,
                        state: { from: location }
                     }}
                     className={s.link}
                  >
                     {movie.title || movie.name}
                  </Link>
               </li>
            ))}
         </ul >
      </>
   )
}

export default TrendingList;