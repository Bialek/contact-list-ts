import styled from "styled-components";
import { NotificationType } from "types";

type StyledNotificationoProps = {
  notificationType: NotificationType;
  time: string;
};

export const StyledNotification = styled.div<StyledNotificationoProps>`
  position: relative;
  background: ${(props): string => props.theme.colors.white};
  width: 250px;
  padding: ${(props): string => props.theme.spaces.l};
  box-shadow: ${(props): string => props.theme.boxShadow};
  padding: ${(props): string => props.theme.spaces.l};
  border: solid 2px
    ${(props): string =>
      props.notificationType === NotificationType.success
        ? props.theme.colors.green
        : props.theme.colors.red10};
  animation: enter 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: progress ${(props) => props.time} linear;
    background-color: ${(props): string =>
      props.notificationType === NotificationType.success
        ? props.theme.colors.green
        : props.theme.colors.red10};
  }

  @keyframes progress {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes enter {
    0% {
      transform: translateX(150%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
