import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import serviceListReducer from '../action/serviceList';
import serviceCardReducer from '../action/serviceCard';
import { fetchServicesEpic, getServiceEpic } from "../components/epics";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceCard: serviceCardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(fetchServicesEpic, getServiceEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epic);

export default store;