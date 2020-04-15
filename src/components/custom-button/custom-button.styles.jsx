import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
`;

const invertedButtonStyles = css`
   background-color: white;
   color: black;
   border: 1px solid black;

   &:hover {
     background-color: black;
     color: white;
     border: none;
   }
 `;

const googleSignInStyles = css`
   background-color: #4285f4 !important;
   color: white;
 `;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  background-color: #8167a9 !important;
  border-color: hsl(210, 14%, 83%);
  border-radius: 4px 4px 4px 4px;
  border-style: solid solid solid none;
  border-width: 1px 1px 1px 1px;
  color: hsl(0, 0%, 100%);
  gap: normal;
  line-height: 24px;
  padding: 8px 12px;
  ${getButtonStyles}
`;