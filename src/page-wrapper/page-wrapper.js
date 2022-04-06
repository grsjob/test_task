import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from "../common-blocks/__button/__button"
import {StyledContainer, StyledPageWrapper} from "./styles";
import Slider from "../common-blocks/__slider/__slider";
import Chips from "../common-blocks/__chips/__chips";

const PageWrapper = props => {

    return (
        <StyledPageWrapper>
            <StyledContainer>
                <Slider />
                <Chips />
                <Button color={'#FFFFFF'} size={"small"}>На карте</Button>
                <Button color={'#0468FF'} size={"big"}>Все пляжи страны</Button>
            </StyledContainer>
        </StyledPageWrapper>
    );
};

PageWrapper.propTypes = {};

export default PageWrapper;
