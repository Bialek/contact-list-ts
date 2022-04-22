import Text from "components/atoms/text";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notificationDelete } from "store/actions/notification";
import { NotificationInfo } from "types";
import { StyledNotification } from "./notification.style";

type Props = {
  notification: NotificationInfo;
};

function Notification({ notification }: Props): JSX.Element {
  const dispatch = useDispatch();

  useEffect((): (() => void) => {
    const timeout = setTimeout((): void => {
      dispatch(notificationDelete(notification));
    }, notification.showTime * 1000);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [dispatch, notification]);

  return (
    <StyledNotification
      time={`${notification.showTime}s`}
      notificationType={notification.type}
    >
      <Text text={notification.text} weight={700} />
      {/* in future should be added close button and logic to stop timeout on hover */}
    </StyledNotification>
  );
}

export default Notification;
