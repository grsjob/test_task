import styled from "styled-components";
import background from './background.jpg'

export const StyledPageWrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledContainer = styled.div`
  max-width: 740px;
  margin: 0 auto;
`