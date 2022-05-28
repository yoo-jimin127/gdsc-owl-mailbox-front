import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBot from './Components/NavBot';
import Create from './Components/Create';
import DeleteAccount from './Components/MyPage/Setting/AccountAdmin/DeleteAccount';
import Privacy from './Components/MyPage/Setting/AboutUs/Privacy';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBot/>
    <Privacy />
  </React.StrictMode>
);

//TODO : Router 사용해서 루트짜기

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
