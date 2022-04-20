import styled from "styled-components";

export const StyledPersonInfo = styled.div`
  background: ${(props): string => props.theme.colors.white};
  display: flex;
  height: 140px;
  justify-content: center;
  flex-direction: column;
  padding: ${(props): string => props.theme.spaces.l};
  box-shadow: ${(props): string => props.theme.boxShadow};
  margin: ${(props): string => props.theme.spaces.m} 0;
  cursor: "pointer";
`;
