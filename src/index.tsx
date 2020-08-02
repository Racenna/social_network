import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// const sum: (num1: number, num2: number) => number = (a, b) => a + b;
// console.log(sum(10, +"20"));
// let num3: number | null = null
// num3 = 19;

// const GET_TASKS = 'profile/GET_TASKS';

// type GetTasksActionType = {
//   type: typeof GET_TASKS;
//   id: number;
// };

// const action1: GetTasksActionType = {
//   id: 1,
//   // type: "profile/GET_TASKS"
//   // or
//   type: GET_TASKS,
// };
// const action2: GetTasksActionType = {
//   id: 2,
//   // type: "profile/GET_TASKS"
//   // or
//   type: GET_TASKS,
// };

// console.log(action1);
// console.log(action2);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
