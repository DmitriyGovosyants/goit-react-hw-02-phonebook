import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, ContactForm, Filter, ContactList } from 'components';
import { Page } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = (name, number) => {
    const { contacts } = this.state;
    if (contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilterByName = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { addContacts, handleFilterChange, handleFilterByName } = this;
    const visibleContacts = handleFilterByName();

    return (
      <Page>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContacts} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList contacts={visibleContacts} />
        </Container>
      </Page>
    );
  }
}
