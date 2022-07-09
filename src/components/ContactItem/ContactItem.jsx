import { Contact, Info, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <Contact>
      <Info>
        {name}: {number}
      </Info>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </Contact>
  );
};
