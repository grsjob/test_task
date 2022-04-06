import React, {useCallback, useEffect, useMemo} from 'react';
import {chips} from "../../mocs/chips";
import {StyledChipsButton} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {postChip, deleteChip, toggleActive} from "../../redux/actions/chipsActions";


const Chips = props => {
    const dispatch = useDispatch()
    const chipsState = useSelector(state => state.chips.chips)

    return (
        <>
            {
                chipsState.map(chip =>
                    <StyledChipsButton
                        key={chip.id}
                        isActive={chip.isActive}
                        onClick={()=>{dispatch(toggleActive(chip.name))}
                        }
                    >
                        {chip.value}
                    </StyledChipsButton>)
            }
        </>

    )
};

Chips.propTypes = {};

export default Chips;
