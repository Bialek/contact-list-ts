import styled from "styled-components";

export const StyledLoader = styled.div`
  display: inline-block;
  height: ${(props) => props.theme.spaces.xxl};
  width: ${(props) => props.theme.spaces.xxl};
  border: 5px solid ${(props): string => props.theme.colors.red20};
  border-radius: 50%;
  border-top-color: ${(props): string => props.theme.colors.red10};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
