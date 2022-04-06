import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Swiper, SwiperSlide, updateSize} from "swiper/react";
import {Navigation} from 'swiper';
import {country} from "../../mocs/country";
import 'swiper/css';
import 'swiper/css/navigation';
import {StyledSliderWrapper} from "./styles";
import {StyledButton} from "./styles"

const Slider = props => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <StyledSliderWrapper>
            <StyledButton prevEl ref={navigationPrevRef}/>
            <StyledButton nextEl ref={navigationNextRef}/>
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
                spaceBetween={28}
                setWrapperSize={true}
                // slidesPerColumnFill="row"
                slidesPerView={4.5}
                loop
                freeMode
                mousewheel
            >
                {country.map((country) => (
                    <SwiperSlide key={country.id}>{country.country}</SwiperSlide>
                ))
                }
            </Swiper>
        </StyledSliderWrapper>

    );
};

Slider.propTypes = {};

export default Slider;
