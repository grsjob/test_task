import React from 'react';
import {useSelector} from "react-redux";

const TextInput = () => {
    const chipsState = useSelector(state => state.chips.chips)

    return (
        <input type="text" placeholder={}/>
    );
};

export default TextInput;
