import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchBox.module.css';

class SearchBox extends Component {

   static propTypes = {
      onSubmit: PropTypes.func,
   };

   state = {
      value: '',
   };

   handleChange = event => {
      this.setState({ value: event.currentTarget.value.toLowerCase() });
   };

   handleSubmit = event => {
      event.preventDefault();
      const { value } = this.state;

      if (value.trim() === '') {
         toast('Enter some text');
         return;
      }

      this.props.onSubmit(value);
      this.setState({ value: '' });
   };

   render() {
      const { value } = this.state;
      return (
         <div
            className={s.searchbox}
         >
            <form
               onSubmit={this.handleSubmit}
               className={s.form}
            >
               <input
                  className={s.input}
                  type="text"
                  name="query"
                  value={value}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoFocus
               />
               <button
                  type="submit"
                  className={s.button}
               >
                  Search
            </button>
            </form>
         </div>
      );
   }
}

export default SearchBox;