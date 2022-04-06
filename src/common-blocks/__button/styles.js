import styled, {css} from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  border: none;
  height: 40px;

  ${(props) => {
    if (props.size === "big") {
      return css`
        border-radius: 4px;
        width: 171px;
        color: white;

      `
    }

    if (props.size === "small") {
      return css`
        box-shadow: 0px 2px 12px rgba(31, 31, 31, 0.15);
        width: 106px;
      `
    }

  }}
`