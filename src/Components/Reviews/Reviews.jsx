import React, { Component } from 'react';
import moviesApi from '../../services/themovie-api';
import s from './Reviews.module.css'

class Reviews extends Component {

   state = { reviews: [] }

   componentDidMount() {
      moviesApi.fetchMovieReviews(this.props.match.params.movieId)
         .then(reviews => this.setState({ reviews }));
   }
   
   render() {
      const { reviews } = this.state;
      return (
         <div className={s.content}>
            {
               reviews.length === 0 && (
                  <p className={s.description}>We don`t have any reviews for this movies</p>
               )}
            {
               reviews.length > 0 && (
                  <ul className={s.list}>
                     {reviews.map(review => (
                        <li
                        className={s.item}
                        key={review.id}>
                           <h3 className={s.subtitle}>Author: {review.author}</h3>
                           <p className={s.description}>{review.content}</p>
                        </li>
                     ))}
                  </ul>
               )
            }
         </div>
      );
   }
}

export default Reviews;