import { Component } from 'react';
import { Container } from 'components';
import { nanoid } from 'nanoid';
import { Page } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const newObj = { name: this.state.name, id: nanoid() };

    this.setState(prev => ({ contacts: [...prev.contacts, newObj] }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <Page>
        <Container>
          <p>Phonebook</p>
          <form action="#" onSubmit={this.handleSubmit}>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              name="name"
              id="userName"
              value={this.state.name}
              onChange={this.handleNameChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button type="submit">Add contact</button>
          </form>
          <p>Contacts</p>
          <ul>
            {this.state.contacts.map(el => {
              return <li key={el.name}>{el.name}</li>;
            })}
          </ul>
        </Container>
      </Page>
    );
  }
}
