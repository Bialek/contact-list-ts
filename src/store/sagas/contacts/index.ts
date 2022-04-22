import { call, takeLatest, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { Action, NotificationType, Person } from "types";
import Constants from "store/constants";
import ContactService from "services/contacts";
import { notificationPush } from "store/actions/notification";

function* getAllContacts(action: Action<Person[], number>): SagaIterator {
  try {
    const response: Person[] | undefined = yield call(
      ContactService.getAll,
      action.payload as number
    );
    if (response && action.onSuccessCallback) {
      yield call(action.onSuccessCallback, response);
      yield put(
        notificationPush("Contacts downloaded", NotificationType.success)
      );
    }
  } catch (error) {
    if (action.onErrorCallback) {
      yield call(action.onErrorCallback);
    }

    yield put(notificationPush(`${error}`, NotificationType.error));
  }
}

export default function* contactsSaga(): SagaIterator {
  yield takeLatest(Constants.GET_ALL_CONTACTS, getAllContacts);
}
