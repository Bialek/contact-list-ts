import styled from "styled-components";

export const StyledNotificationsContainer = styled.div`
  position: fixed;
  top: ${(props): string => props.theme.spaces.l};
  right: ${(props): string => props.theme.spaces.l};
  display: flex;
  flex-direction: column;
  gap: ${(props): string => props.theme.spaces.m};
`;
