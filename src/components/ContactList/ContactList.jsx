import { ContactItem } from 'components';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            onDelete={onDelete}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  );
};
