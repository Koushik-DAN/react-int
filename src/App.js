import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Images from './components/Images';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router';
import Todos from './components/Todos';
import Increment from "./components/Increment"
import DashboardHome from "./components/Dashboard/DashboardHome"
import DashboardSettings from "./components/Dashboard/DashboardSettings"
// 4. Main App (The "Container" that holds everything)
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/increment' element={<Increment />} />


        <Route path='dashboard'>
          <Route index element={<DashboardHome />} />
          <Route path='settings' element={<DashboardSettings />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;