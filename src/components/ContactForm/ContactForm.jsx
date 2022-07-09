import { Component } from 'react';
import { Form, Label, Input, SubmitBtn } from './contactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleInputChange } = this;

    return (
      <Form action="#" onSubmit={handleSubmit}>
        <Label htmlFor="userName">Name</Label>
        <Input
          type="text"
          name="name"
          id="userName"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="userNumber">Number</Label>
        <Input
          type="tel"
          name="number"
          id="userNumber"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}
