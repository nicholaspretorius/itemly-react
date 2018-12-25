import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './store';
import { Provider } from 'react-redux';
import main from './main.css';

ReactDOM.render(
    <div>
        <Provider store={store()}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('app')
);