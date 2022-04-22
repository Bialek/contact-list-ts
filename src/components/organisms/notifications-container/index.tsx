import React from "react";
import { NotificationInfo } from "types";
import { useSelector } from "react-redux";
import { State } from "store/reducers";
import { StyledNotificationsContainer } from "./notifications-container.style";
import Notification from "components/molecules/notification";

function NotificationsContainer(): JSX.Element {
  const notificationStore = useSelector(
    (state: State): NotificationInfo[] => state.notification.collection
  );

  return (
    <StyledNotificationsContainer>
      {notificationStore.map(
        (notification: NotificationInfo): JSX.Element => (
          <Notification key={notification.id} notification={notification} />
        )
      )}
    </StyledNotificationsContainer>
  );
}

export default NotificationsContainer;
