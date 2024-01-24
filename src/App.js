import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Login from './pages/main/Login.js';
import SignUp from './pages/main/SignUp.js';
import MyInfo from './pages/mypage/MyInfo.js';
import PetSitter from './pages/petsitter/PetSitter.js';
import PetSitterFoam from './pages/petsitter/PetSitterFoam.js';
import PetSitterGuide from './pages/petsitter/PetSitterGuide.js';
import PetSitterInfo from './pages/petsitter/PetSitterInfo.js';
import Community from './pages/community/Community.js';
import CommunityPost from './pages/community/CommunityPost.js';
import CommunityResult from './pages/community/CommunityResult.js';
import CommunityWrite from './pages/community/CommunityWrite.js';
import NotFoundPage from './pages/NotFoundPage.js';
import PetInfo from './pages/mypage/PetInfo';
import PetInfoAdd from './pages/mypage/PetInfoAdd';
import UserSupport from './pages/UserSupport.js';
import ReservationPetsitter from './pages/mypage/ReservationPetsitter';
import ReservationCancle from './pages/mypage/ReservationCancle';
import ReserveReview from './pages/mypage/ReserveReview';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/petsitter' element={<PetSitter />}></Route>
        <Route path='/petsitterfoam' element={<PetSitterFoam />}></Route>
        <Route path='/petsitterguide' element={<PetSitterGuide />}></Route>
        <Route path='/petsitterinfo' element={<PetSitterInfo />}></Route>
        <Route path='/community' element={<Community />}></Route>
        <Route path='/communitypost' element={<CommunityPost />}></Route>
        <Route path='/communityresult' element={<CommunityResult />}></Route>
        <Route path='/communitywrite' element={<CommunityWrite />}></Route>
        <Route path='/myinfo' element={<MyInfo />}></Route>
        <Route path='/notfoundpage' element={<NotFoundPage />}></Route>
        <Route path='/petinfo' element={<PetInfo />}></Route>
        <Route path='/petinfoadd' element={<PetInfoAdd />} />
        <Route path='/usersupport' element={<UserSupport />}></Route>
        <Route path='/kakao/callback' element={<SignUp />}></Route>
        <Route path='/reservepetsitter' element={<ReservationPetsitter/>}></Route>
        <Route path='/reservecancle' element={<ReservationCancle/>}></Route>
        <Route path='/reservereview' element={<ReserveReview/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
