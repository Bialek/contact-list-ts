import styled from "styled-components";


export const StyledLoader = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid rgb(26 108 97 / 56%);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
