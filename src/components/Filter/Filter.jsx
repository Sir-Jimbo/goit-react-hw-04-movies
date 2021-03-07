import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
   return (
      <div className={s.container}>
         <label className={s.label}>
            Find contacts by name:

         <input
               className={s.input}
               placeholder="search by name"
               type="text"
               value={value}
               onChange={onChange} />
         </label>
      </div>
   );
}

export default Filter;