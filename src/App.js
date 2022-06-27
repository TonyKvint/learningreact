import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Dialogs/*' element={<DialogsContainer />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Users' element={<UsersContainer />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;