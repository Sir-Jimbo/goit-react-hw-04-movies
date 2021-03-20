import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={s.menu}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink
                  exact
                  to={routes.home}
                  className={s.NavLink}
                  activeClassName={s.NavLinkActive}
               >
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={routes.movies}
                  className={s.NavLink}
                  activeClassName={s.NavLinkActive}
               >
                  Movies
         </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;