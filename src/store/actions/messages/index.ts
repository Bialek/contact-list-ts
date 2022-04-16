import constants from "store/constants";
import { Action, NotificationType, Notification } from "types";

export const messagesPush = (
  text: string,
  type: NotificationType,
  showTime = 5
): Action<undefined, Notification> => {
  const timestamp: number = new Date().getTime();
  const message: Notification = {
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

export const messagesDelete = (id: string): Action<undefined, string> => {
  return {
    type: constants.NOTIFICATION_DELETE,
    payload: id,
  };
};
