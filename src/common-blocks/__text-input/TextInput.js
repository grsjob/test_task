import React from 'react';
import {useSelector} from "react-redux";
import {StyledInput} from "./styles";

const TextInput = () => {
    const chips = useSelector(state => state.chips.chips)
    let placeHolder = 'Поиск по стране, региону, городу,'
    const [activeButton] = chips.filter(chip => chip.isActive)
    placeHolder += activeButton.placeHolder

    return (
        <StyledInput type="text" placeholder={placeHolder}/>
    );
};

export default TextInput;
