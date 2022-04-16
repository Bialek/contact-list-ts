import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";

import contactsSaga from "store/sagas/contacts";

export default function* rootSaga(): SagaIterator {
  yield all([
    call(contactsSaga),
    //here should be next sagas
  ]);
}
