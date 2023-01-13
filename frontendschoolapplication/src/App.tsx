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
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="App">
      <NavBar />
      {
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/AddStudent' element={<AddStudent />} />
            <Route path='/EditStudent' element={<EditStudent />} />
            <Route path='CourseList/AddCourse' element={<AddCourse />} />
            <Route path='/CourseList' element={<CourseList />} />
  </Routes>  }  
    </div>
  );
}

export default App;
