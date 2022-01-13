import React from "react";
import PropTypes from 'prop-types';
import ContactsItem from "../ContactsItem/ContactsItem";
import { List, Item } from '../Phonebook.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
                <ContactsItem
                    name={name}
                    number={number}
                    onDelete={() => onDeleteContact(id)}
                />
            </Item>
        ))}
    </List>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func,
}

export default ContactsList;