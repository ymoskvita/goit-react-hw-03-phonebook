import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { InputStyled, Btn } from '../Phonebook.styled';

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}> Name
                    <InputStyled
                        id={this.nameInputId}
                        type="text"
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor={this.numberInputId}>Number
                    <InputStyled
                        id={this.numberInputId}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
            <Btn type="submit">Add contact</Btn>
          </form>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;