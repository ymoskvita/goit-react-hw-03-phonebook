import React, { Component } from "react";
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import Section from "./Phonebook/Section";
import ContactsList from "./Phonebook/ContactsList";
import Form from "./Phonebook/Form";
import Filter from "./Phonebook/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    const normalizedName = name.toLocaleLowerCase();

    if (this.state.contacts.some(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedName))) {
      return toast.error(`${name} is already in contacts.`)
      }

      this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    )
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Toaster />
        <Section title="Phonebook">
          <Form onSubmit={this.addContact}/>
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;