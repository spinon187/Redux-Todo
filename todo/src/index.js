import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import todos from './reducers';
import TodoList from './components/TodoList';

const store = createStore(todos);

ReactDOM.render(
    <Provider store={store}>
      <TodoList />
    </Provider>,
    document.getElementById('root')
  );
