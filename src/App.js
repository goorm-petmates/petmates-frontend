import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Login from './pages/main/Login.js';
import SignUp from './pages/main/SignUp.js';
import FindInfo from './pages/main/FindInfo.js';
import MyPage from './pages/mypage/MyPage.js';
import PetSitter from './pages/petsitter/PetSitter.js';
import PetSitterFoam from './pages/petsitter/PetSitterFoam.js';
import PetSitterGuide from './pages/petsitter/PetSitterGuide.js';
import PetSitterInfo from './pages/petsitter/PetSitterInfo.js';
import Community from './pages/community/Community.js';
import CommunityPost from './pages/community/CommunityPost.js';
import CommunityResult from './pages/community/CommunityResult.js';
import CommunityWrite from './pages/community/CommunityWrite.js';
import NotFoundPage from './pages/NotFoundPage.js';
import UserSupport from './pages/UserSupport.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/findinfo' element={<FindInfo />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/petsitter' element={<PetSitter />}></Route>
        <Route path='/petsitterfoam' element={<PetSitterFoam />}></Route>
        <Route path='/petsitterguide' element={<PetSitterGuide />}></Route>
        <Route path='/petsitterinfo' element={<PetSitterInfo />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/communitypost' element={<CommunityPost />}></Route>
        <Route path='/communityresult' element={<CommunityResult />}></Route>
        <Route path='/communitywrite' element={<CommunityWrite />}></Route>
        <Route path='/notfoundpage' element={<NotFoundPage />}></Route>
        <Route path='/usersupport' element={<UserSupport />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
