import styled from "styled-components";

export const StyledPersonAcronym = styled.div`
  background: ${(props): string => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.l};
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 50%;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.spaces.xxl};
  width: ${(props) => props.theme.spaces.xxl};
`;
