import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

//в пропсы идёт state

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/Profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />

          <Route path='/Dialogs/*' element={<DialogsContainer dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />

          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;