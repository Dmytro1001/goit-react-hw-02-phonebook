import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        name: [...prevState.name, newContact.name],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
    );
  }
}
