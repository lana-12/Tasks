import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./scss/index.scss";
import reportWebVitals from './reportWebVitals';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers";
import { getTasks } from './actions/task.action';
 

const root = ReactDOM.createRoot(document.getElementById('root'));

//Config 
const store = configureStore({
  reducer: rootReducer,
  devTools: true, 
})

store.dispatch(getTasks())

root.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
     
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
