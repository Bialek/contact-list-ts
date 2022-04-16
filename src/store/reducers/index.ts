import { combineReducers } from "redux";

import notification, { NotificationState } from "store/reducers/notification";

export interface State {
  notification: NotificationState;
}

const reducers = combineReducers({
  notification,
  //here should be next reducers
});

export default reducers;
