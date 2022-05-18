import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/Dialogs/*' element={<Dialogs />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/News' element={<News />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Music' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}

export default App;