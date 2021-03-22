import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';
import s from './MovieNavigation.module.css'

const MovieNavigation = ({ match, location }) => {

   return (
      <div className={s.submenu}>
         <h2>Additional information</h2>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink
                  className={s.link}
                  to={{
                     pathname: `${match.url}/cast`,
                     state: { from: location?.state?.from || routes.movies }
                  }}
               >
                  Cast
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink
                  className={s.link}
                  to={{
                     pathname: `${match.url}/reviews`,
                     state: { from: location?.state?.from || routes.movies }
                  }}
               >
                  Reviews
               </NavLink>
            </li>
         </ul>
      </div>
   )
}

export default withRouter(MovieNavigation);