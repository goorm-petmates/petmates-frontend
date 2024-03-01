import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Login from './pages/main/Login.js';
import SignUp2 from './pages/main/SignUp2.js';
import MyInfo from './pages/mypage/MyInfo.js';
import PetSitter from './pages/petsitter/PetSitter.js';
import PetSitterForm from './pages/petsitter/PetSitterForm.js';
import PetSitterGuide from './pages/petsitter/PetSitterGuide.js';
import PetSitterInfo from './pages/petsitter/PetSitterInfo.js';
import PetSitterList from './components/PetSitterList';
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
import MyManagement from './pages/mypage/MyManagement';
import MyMamagementCancle from './pages/mypage/MyMamagementCancle';
import AuthProvider from './components/AuthContext.js';
import HeaderWithNav from './components/HeaderWithNav';
import TestPetInfoAdd from './pages/mypage/TestPetInfoAdd';
import TestPetSitterForm from './pages/petsitter/TestPetSitterForm.js';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderWithNav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup2' element={<SignUp2 />}></Route>
          <Route path='/petsitter' element={<PetSitter />}></Route>
          <Route path='/petsitterform' element={<PetSitterForm />}></Route>
          <Route path='/petsitterguide' element={<PetSitterGuide />}></Route>
          <Route path='/petsitters' element={<PetSitterList />} />
          <Route path='/petsitterinfo/:id' element={<PetSitterInfo />} />
          <Route path='/community' element={<Community />}></Route>
          <Route path='/communitypost' element={<CommunityPost />}></Route>
          <Route path='/communityresult' element={<CommunityResult />}></Route>
          <Route path='/communitywrite' element={<CommunityWrite />}></Route>
          <Route path='/myinfo' element={<MyInfo />}></Route>
          <Route path='/notfoundpage' element={<NotFoundPage />}></Route>
          <Route path='/petinfo' element={<PetInfo />}></Route>
          <Route path='/petinfoadd' element={<PetInfoAdd />} />
          <Route path='/usersupport' element={<UserSupport />}></Route>
          <Route path='/oauth/redirect/kakao' element={<SignUp2 />}></Route>
          <Route path='/reservepetsitter' element={<ReservationPetsitter />}></Route>
          <Route path='/reservecancle' element={<ReservationCancle />}></Route>
          <Route path='/reservereview' element={<ReserveReview />}></Route>
          <Route path='/mymanagement' element={<MyManagement />} />
          <Route path='/mymanagementcancle' element={<MyMamagementCancle />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
