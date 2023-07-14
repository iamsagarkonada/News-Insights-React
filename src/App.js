import './App.css';
import React, { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
const App=()=> {
  const [progress,setProgress]=useState(0);
  const apiKey=process.env.REACT_APP_NEWS_API
  const pageSize=5;
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/healthcare" element={<News setProgress={setProgress} apiKey={apiKey} key="healthcare" pageSize={pageSize} country="in" category="healthcare"/>}></Route>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
}
export default App;