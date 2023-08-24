import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, queryClient } from './queryClient'; // Import your QueryClientProvider
import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './redux/contactSlice'

const store = configureStore({
  reducer:{
    users: contactSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
     <BrowserRouter>
     <App />     
     </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
