import { call, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { Action, Person } from "types";
import Constants from "store/constants";
import ContactService from "services/contacts";

function* getAllContacts(action: Action<Person[], undefined>): SagaIterator {
  try {
    const response: Person[] | undefined = yield call(ContactService.getAll);
    if (response && action.onSuccessCallback) {
      yield call(action.onSuccessCallback, response);
    }
  } catch (error) {
    //error
  }
}

export default function* contactsSaga(): SagaIterator {
  yield takeEvery(Constants.GET_ALL_CONTACTS, getAllContacts);
}
