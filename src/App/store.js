import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/reducer/user';
import createSagaMiddleware from 'redux-saga';
import { userSaga } from '../userSaga/userSaga';

const rootReducer = combineReducers({
  UserData: dataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export default store;
