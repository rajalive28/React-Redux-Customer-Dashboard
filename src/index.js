import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/home/App';
import Login from './components/login/login-admin';
import Customer from './components/customer/customer-dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger'


const logger = createLogger();
const store = createStore(allReducers, compose(applyMiddleware(thunk, promise, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch >
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/customer" component={Customer}></Route>
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
