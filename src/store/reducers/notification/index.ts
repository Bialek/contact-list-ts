import Constants from "store/constants";
import { Action, Notification } from "types";

export interface NotificationState {
  readonly collection: Notification[];
}

const initialState: NotificationState = {
  collection: [],
};

const notification = (
  state: NotificationState = initialState,
  action: Action<undefined, Notification>
): NotificationState => {
  switch (action.type) {
    case Constants.NOTIFICATION_PUSH:
      return {
        ...state,
        collection: [action.payload as Notification, ...state.collection],
      };
    case Constants.NOTIFICATION_DELETE:
      return {
        ...state,
        collection: [
          ...state.collection.filter(
            (item: Notification): boolean =>
              item.id !== (action.payload as Notification).id
          ),
        ],
      };
    default:
      return state;
  }
};

export default notification;
