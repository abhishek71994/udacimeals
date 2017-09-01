import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


ReactDOM.render(<App store={ store }/>, document.getElementById('root'));
registerServiceWorker();