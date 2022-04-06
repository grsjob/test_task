import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './styles'

const Button = ({color, size,children}) => {
    return (
        <StyledButton color={color} size={size}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string

};

export default Button;
