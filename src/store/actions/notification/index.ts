import constants from "store/constants";
import { Action, NotificationType, NotificationInfo } from "types";

export const notificationPush = (
  text: string,
  type: NotificationType,
  showTime = 5
): Action<undefined, NotificationInfo> => {
  const timestamp: number = new Date().getTime();
  const message: NotificationInfo = {
    text,
    type,
    showTime,
    id: timestamp.toString(),
  };
  return {
    type: constants.NOTIFICATION_PUSH,
    payload: message,
  };
};

export const notificationDelete = (
  notification: NotificationInfo
): Action<undefined, NotificationInfo> => ({
  type: constants.NOTIFICATION_DELETE,
  payload: notification,
});
