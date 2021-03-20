import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MoviesPageList.module.css'

const MoviesPageList = ({ movies, match, location }) => {

   return (
      <div className={s.inner}>
         <ul className={s.list}>
            {movies.map(movie => (
               <li
                  key={movie.id}
                  className={s.item}
               >
                  <Link
                     to={{
                        pathname: `${match.url}/${movie.id}`,
                        state: { from: location }
                     }}
                     className={s.link}
                  >
                     {movie.title || movie.name}
                  </Link>
               </li>
            ))}
         </ul >
      </div>
   )
}

export default withRouter(MoviesPageList);