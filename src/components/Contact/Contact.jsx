import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ name, number }) => {
   return (
      <>
         <p className={s.contact}>{name}</p>
         <p className={s.contact}>{number}</p>
      </>
   )
}

Contact.propTypes = {
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
}

export default Contact;