import styled from "styled-components";

type StyledPersonInfoProps = {
  isSelected?: boolean;
};

export const StyledPersonInfo = styled.div<StyledPersonInfoProps>`
  background: ${(props): string => props.theme.colors.white};
  display: flex;
  height: 140px;
  justify-content: center;
  flex-direction: column;
  padding: ${(props): string => props.theme.spaces.l};
  box-shadow: ${(props): string => props.theme.boxShadow};
  margin: ${(props): string => props.theme.spaces.m} 0;
  cursor: "pointer";
  border: solid 2px
    ${(props): string =>
      props.isSelected ? props.theme.colors.red10 : props.theme.colors.white};
  transition: border-color ease-in-out 0.3s;
  &:hover {
    border-color: ${(props): string => props.theme.colors.red10};
  }
`;
