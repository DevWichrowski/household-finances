import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import mySaga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';

const persistConfig = { key: 'root',storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(mySaga);

export { store, persistor };
