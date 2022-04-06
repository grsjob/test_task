import styled, {css} from "styled-components";
import nextEl from './nextEl.svg'
import prevEl from './prevEl.svg'

export const StyledSliderWrapper = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  padding: 16px 0;
  color: white;
  position: relative;
`

export const StyledButton = styled.button`
  width: 24px;
  height: 16px;
  border: none;
  background-color: inherit;
  position: absolute;
${(props)=>{
    if(props.nextEl){
        return css`
        background-image: url(${nextEl});
          right: -20px;
          top: 50px;

          
        `
    }
  if(props.prevEl){
    return css`
        background-image:  url(${prevEl});
      left: -20px;
      top: 50px;
        `
  }
}}
`