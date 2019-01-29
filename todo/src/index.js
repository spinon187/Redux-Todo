import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import TodoList from './components/TodoList';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <TodoList />
    </Provider>,
    document.getElementById('root')
  );
