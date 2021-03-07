import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ items, onDeleteContact }) => {
   return (
      <ul >
         {items.map(item => (
            <li className={s.item} key={item.id} >
               <Contact name={item.name} number={item.number} />
               <button
                  className={s.button}
                  type="button"
                  onClick={() => onDeleteContact(item.id)}
               >
                  delete
                  </button>

            </li>
         ))}
      </ul>

   )
}

export default ContactList;