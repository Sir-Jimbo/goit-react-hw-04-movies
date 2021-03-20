import React, { Component } from 'react';
import moviesApi from '../../services/themovie-api';
import s from './Cast.module.css'

class Cast extends Component {
   state = { casts: [] }
   componentDidMount() {
      moviesApi.fetchMovieCast(this.props.match.params.movieId)
         .then(casts => this.setState({ casts }));
   }
   render() {
      const { casts } = this.state;
      return (
         <div className={s.content}>
            <ul className={s.list}>
               {casts.map(cast => (
                  <li
                     className={s.item}
                     key={cast.id}
                  >
                     <img
                        className={s.image}
                        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                        alt={cast.title}
                     />
                     <h3 className={s.subtitle}>{cast.name}</h3>
                     <p className={s.character}>Character:  {cast.character}</p>
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default Cast;