import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spaces.m};
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
