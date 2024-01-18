import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Login from './pages/main/Login.js';
import SignUp from './pages/main/SignUp.js';
import FindInfo from './pages/main/FindInfo.js';
import MyInfo from './pages/mypage/MyInfo.js';
import Sitter from './pages/petsitter/Sitter.js';
import SitterApp from './pages/petsitter/SitterApp.js';
import SitterGuide from './pages/petsitter/SitterGuide.js';
import SitterInfo from './pages/petsitter/SitterInfo.js';
import Comm from './pages/community/Comm.js';
import CommPost from './pages/community/CommPost.js';
import CommSearchResults from './pages/community/CommSearchResults.js';
import CommWritePost from './pages/community/CommWritePost.js';
import NotFoundPage from './pages/NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/findinfo' element={<FindInfo />}></Route>
        <Route path='/myinfo' element={<MyInfo />}></Route>
        <Route path='/sitter' element={<Sitter />}></Route>
        <Route path='/sitterapp' element={<SitterApp />}></Route>
        <Route path='/sitterguide' element={<SitterGuide />}></Route>
        <Route path='/sitterinfo' element={<SitterInfo />}></Route>
        <Route path='/comm' element={<Comm />}></Route>
        <Route path='/commpost' element={<CommPost />}></Route>
        <Route path='/commsearchresults' element={<CommSearchResults />}></Route>
        <Route path='/commwritepost' element={<CommWritePost />}></Route>
        <Route path='/notfoundpage' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
