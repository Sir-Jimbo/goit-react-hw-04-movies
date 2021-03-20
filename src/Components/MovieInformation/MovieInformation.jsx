import React from 'react';
import s from './MovieInformation.module.css'

const MovieInformation = ({ image, movie }) => {

   return (
      <div className={s.card}>
         <img
            className={s.poster}
            src={`${image}/${movie.poster_path}`}
            alt={movie.title}
         />
         <div className={s.content}>
            <h1 className={s.title}>{movie.title}</h1>
            <h2 className={s.subtitle}>Overview</h2>
            <p className={s.description}>{movie.overview}</p>
            <h2 className={s.subtitle}>Genres</h2>
            <ul className={s.list}>
               {movie.genres.map(genre => (
                  <li
                     className={s.item}
                     key={genre.id}
                  >
                     {genre.name}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default MovieInformation;