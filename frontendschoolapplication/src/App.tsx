import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StudentList from './components/StudentList';
import { JsxAttribute } from 'typescript';
import AddStudent from './components/AddStudent';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EditStudent from './components/EditStudent';
import Apiservices from './components/Apiservices';

function App() {
  return (
    <div className="App">
      <NavBar />
      {
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/AddStudent' element={<AddStudent />} />
            <Route path='/EditStudent' element={<EditStudent />} />
            <Route path='/Apiservices' element={<Apiservices />} />
  </Routes>  }  
    </div>
  );
}

export default App;
