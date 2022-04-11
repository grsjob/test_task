import React from 'react';
import {StyledChipsButton} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {toggleActive} from "../../redux/actions/chipsActions";


const Chips = props => {
    const dispatch = useDispatch()
    const chipsState = useSelector(state => state.chips.chips)

    return (
        <ul style={{listStyle: "none"}}>
            {
                chipsState.map(chip =>
                    <li key={chip.id}>
                        <StyledChipsButton
                            isActive={chip.isActive}
                            onClick={() => {
                                dispatch(toggleActive(chip.name))
                            }
                            }
                        >
                            {chip.value}
                        </StyledChipsButton>
                    </li>
                )
            }
        </ul>

    )
};

Chips.propTypes = {};

export default Chips;
