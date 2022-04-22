import { createStore, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(): Store {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

  const store: Store = createStore(
    reducers,
    process.env.NODE_ENV === "development"
      ? composeEnhancers(applyMiddleware(sagaMiddleware))
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
