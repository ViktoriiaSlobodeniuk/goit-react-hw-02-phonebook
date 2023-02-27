import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactsForm } from './contactsForm';
import { ContactsList } from './contactsList';
import { Filter } from './filter';

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

  onContactsFormSubmit = (name, number) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      ...prevState,
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilter = text => {
    this.setState(prevState => ({
      ...prevState,
      filter: text,
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.onContactsFormSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onContactDelete}
        />
      </div>
    );
  }
}
