import styled, {css} from "styled-components";

export const StyledChipsButton = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 24px;
  color: #434343;
  background-color: #F0F0F0;
  border-radius: 18px;
  border: none;
  font-family: 'Roboto';//TODO отрефакторить стили
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  ${(props)=>{
      if(props.isActive){
          return css`
          background-color: #EB6012;
            color: #F5F5F5;
          `
      }
  }}
`