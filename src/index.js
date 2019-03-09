import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from 'react-redux/es/components/Provider';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/localStorage/configureStore';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
