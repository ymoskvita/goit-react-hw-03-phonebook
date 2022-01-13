import React from "react";
import PropTypes from 'prop-types';
import { InputStyled } from '../Phonebook.styled';

const Filter = ({ value, onChange }) => (
    <label>Find contacts by name
        <InputStyled type="text" value={value} onChange={onChange} />
    </label>
)

Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func,
}

export default Filter;