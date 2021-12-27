import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Without JSX
// const element = React.createElement("h1",null,"My first react without jsx");
// ReactDOM.render(element,document.getElementById("root"));

//Using JSX
// const element = <h1>My first React using jsx</h1>
// ReactDOM.render(
//     element
//   ,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

var DisplayEmployees =(emp)=> {
    return <div>
        <p>
            <label><b>Id: </b> {emp.id}</label>
        </p>
        <p>
            <label><b>First Name: </b> {emp.fName}</label>
            </p>
        <p>
            <label><b>Last Name: </b> {emp.lName}</label>
        </p>
        <p>
            <label><b>Location: </b> {emp.location}</label>
        </p>
        <DisplayEmployeeDept deptName={emp.deptName} headName={emp.headName}></DisplayEmployeeDept>
    </div>;
}

var DisplayEmployeeDept =(dept)=> {
    return <div>
        <p>
            <label><b>Dept Name: </b> {dept.deptName}</label>
            </p>
        <p>
            <label><b>Head Name: </b> {dept.headName}</label>
        </p>
    </div>;
}
const element = <DisplayEmployees id="1" fName="John" lName="Doe" location="USA"
DisplayEmployeeDept deptName="I.T" headName="head1"></DisplayEmployees>
ReactDOM.render(element,document.getElementById("root"));