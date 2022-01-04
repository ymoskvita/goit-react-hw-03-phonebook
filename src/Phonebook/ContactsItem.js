import React from "react";
import PropTypes from 'prop-types';
import IconButton from "./IconButton";
import { ReactComponent as DeleteIcon } from '../icons/close.svg'

const ContactsItem = ({ name, number, onDelete }) => (
    <>
        <p>{name}</p>
        <p>{number}</p>
        <IconButton onClick={onDelete} aria-label="Delete contact">
            <DeleteIcon width="15" height="15" />
        </IconButton>
    </>
);

ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func,
}

export default ContactsItem;