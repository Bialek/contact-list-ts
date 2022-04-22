import Constants from "store/constants";
import { Action, NotificationInfo } from "types";

export interface NotificationState {
  readonly collection: NotificationInfo[];
}

const initialState: NotificationState = {
  collection: [],
};

const notification = (
  state: NotificationState = initialState,
  action: Action<undefined, NotificationInfo>
): NotificationState => {
  switch (action.type) {
    case Constants.NOTIFICATION_PUSH:
      return {
        ...state,
        collection: [action.payload as NotificationInfo, ...state.collection],
      };
    case Constants.NOTIFICATION_DELETE:
      return {
        ...state,
        collection: [
          ...state.collection.filter(
            (item: NotificationInfo): boolean =>
              item.id !== (action.payload as NotificationInfo).id
          ),
        ],
      };
    default:
      return state;
  }
};

export default notification;
