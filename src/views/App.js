import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ListToDo from './Todos/ListToDo';
// import MyComponent from './Example/MyComponent';
// import MyForm from './Example/MyForm';
// import SplitComponent from './Example/SplitComponent';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        {/* <MyComponent /> */}
        {/* <MyForm /> */}
        {/* <SplitComponent /> */}

        <ListToDo />



      </header>
    </div>
  );
}

export default App;
