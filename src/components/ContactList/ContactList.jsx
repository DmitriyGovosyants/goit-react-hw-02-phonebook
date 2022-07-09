import { ContactItem } from 'components';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number }) => {
        return <ContactItem key={name} name={name} number={number} />;
      })}
    </ul>
  );
};
