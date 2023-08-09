import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import s from './contact.module.css';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={s.flexkontakt}>
        <p className={s.name}> {contact.name}</p>
        <p>---</p>
        <p className={s.number}>{contact.number}</p>
        <button className={s.buton} onClick={handleDelete}>
          Remove contact
        </button>
      </div>
    </>
  );
};
