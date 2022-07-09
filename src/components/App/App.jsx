import { Component } from 'react';
import { Container } from 'components';
import { nanoid } from 'nanoid';
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
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
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
    const visibleContacts = this.handleFilterByName();
    return (
      <Page>
        <Container>
          <p>Phonebook</p>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            action="#"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="name"
              id="userName"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="userNumber">Number</label>
            <input
              type="tel"
              name="number"
              id="userNumber"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add contact</button>
          </form>
          <p>Contacts</p>
          <label htmlFor="filter">Find contacts by name</label>
          <input
            type="text"
            id="filter"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <ul>
            {visibleContacts.map(el => {
              return (
                <li key={el.name}>
                  {el.name}: {el.number}
                </li>
              );
            })}
          </ul>
        </Container>
      </Page>
    );
  }
}
