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
//4. 
// var DisplayEmployees =(emp)=> {
//     return <div>
//         <p>
//             <label><b>Id: </b> {emp.id}</label>
//         </p>
//         <p>
//             <label><b>First Name: </b> {emp.fName}</label>
//             </p>
//         <p>
//             <label><b>Last Name: </b> {emp.lName}</label>
//         </p>
//         <p>
//             <label><b>Location: </b> {emp.location}</label>
//         </p>
//         <DisplayEmployeeDept deptName={emp.deptName} headName={emp.headName}></DisplayEmployeeDept>
//     </div>;
// }
// //DisplayEmployeeDept is user defined component
// var DisplayEmployeeDept =(dept)=> {
//     return <div>
//         <p>
//             <label><b>Dept Name: </b> {dept.deptName}</label>
//             </p>
//         <p>
//             <label><b>Head Name: </b> {dept.headName}</label>
//         </p>
//     </div>;
// }

//5. Using class component
// class Employee extends React.Component{
//     constructor (props)
//     {
//         super(props);
//         console.log(props);
//     }

//     render()
//     {
//         return <div>
//          <p>
//              <label><b>Id: </b> {this.props.id}</label>
//          </p>
//          <p>
//              <label><b>First Name: </b> {this.props.fName}</label>
//              </p>
//          <p>
//              <label><b>Last Name: </b> {this.props.lName}</label>
//          </p>
//          <p>
//              <label><b>Location: </b> {this.props.location}</label>
//          </p>
//          <Department deptName={this.props.deptName} headName={this.props.headName}></Department>
//      </div>;
//     }
// }
// class Department extends React.Component{
//     render()
//     {
//         return <div>
//          <p>
//              <label><b>Dept Name: </b> {this.props.deptName}</label>
//              </p>
//          <p>
//              <label><b>Head Name: </b> {this.props.headName}</label>
//          </p>
//      </div>;
//     }
// }
// const element = <Employee id="1" fName="John" lName="Doe" location="USA"
// deptName="I.T" headName="head1"></Employee>
// ReactDOM.render(element,document.getElementById("root"));

//6. USING STATE IN REACT
// class Employee extends React.Component
// {
//     state = {
//         counter:0
//     };
//     addEmployee=()=>{
//         this.setState({counter:this.state.counter+1});
//     }

//     render()
//     {
//         return <div>
//             <h1>Welcome to the employee component</h1>
//             <p><button onClick={this.addEmployee}>Increment employee count</button></p>
//             <p><label>Total count {this.state.counter}</label></p>
//         </div>
//     }
// }
// const element = <Employee></Employee>
// ReactDOM.render(element,document.getElementById("root"));

//7. INTERACTION BETWEEN THE COMPONENTS
class Employee extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            updatedSalary:null
        };
    }

    getUpdatedSalary=(salary)=>
    {
        this.setState({updatedSalary : salary});
    }

    render()
    {
        return <div>
            <h1>Employee Component</h1>
            <p>
              <label><b>Id: </b> {this.props.id}</label>
            </p>
            <p>
              <label><b>First Name: </b> {this.props.fName}</label>
            </p>
            <p>
              <label><b>Last Name: </b> {this.props.lName}</label>
            </p>
            <p>
              <label><b>Location: </b> {this.props.location}</label>
            </p> 
            <p>
              <label><b>Salary: </b> {this.props.Salary}</label>
            </p> 
            <p>
              <label><b>Updated Salary: </b> {this.state.updatedSalary}</label>
            </p>
            <Salary HRA={this.props.HRA} basicSalary={this.props.Salary}
            SAllowance={this.props.SAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
        </div>;
    }
}

class Salary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.basicRef =React.createRef();
        this.hraRef =React.createRef();
        this.saRef =React.createRef();
        this.state = {
            bs : this.props.basicSalary,
            hr : this.props.HRA,
            sa : this.props.SAllowance,
        }
    }

    UpdateSalary=()=>{
        let salary = parseInt(this.basicRef.current.value)+ parseInt(this.hraRef.current.value)
        + parseInt(this.saRef.current.value);
        this.props.onSalaryChanged(salary);
    }

    render()
    {
        return <div>
            <h1>Salary Component</h1>
            <p>
              <label><b>Basic Salary: </b> <input type="text" defaultValue={this.state.bs} ref={this.basicRef}></input></label>
            </p>
            <p>
              <label><b>HRA: </b><input type="text" ref={this.hraRef}  defaultValue={this.state.hr}></input></label>
            </p>
            <p>
              <label><b>Special Allowance: </b><input type="text" ref={this.saRef}  defaultValue={this.state.sa}></input></label>
            </p> 
            <button onClick={this.UpdateSalary}>Update</button>
        </div>;
    }
}
const element = <Employee id="1" fName="John" lName="Doe" location="USA"
 Salary="50000" basicSalary="30000" HRA="15000" SAllowance="5000"
 ></Employee>

 ReactDOM.render(element,document.getElementById("root"));