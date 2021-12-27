import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Without JSX
const element = React.createElement("<h1>",null,"My first react without jsx");
ReactDOM.render(element,document.getElementById("root"));

//Using JSX
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   ,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
