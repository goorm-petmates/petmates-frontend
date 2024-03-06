import '../../styles/StyleLogin.css';
// import HeaderWithNav from '../../components/HeaderWithNav';
import Footer from '../../components/Footer';

function Login() {
  // const REST_API_KEY = '06255b2f3a6bd19ffa9bad111b8d01cd';
  // const REDIRECT_URI = 'https://api.petmates.co.kr/api/members/test/oauth/redirect/kakao';

  return (
    <div className='login-container'>
      {/*<HeaderWithNav />*/}

      <div className='login'>
        <img className='login-logo' alt='Logo' src='/imgs/Logo.png' />
        <p className='login-info'>서비스 이용을 위해 로그인 해주세요 :)</p>
        <button
          className='kakao-button'
          onClick={() => {
//            window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=06255b2f3a6bd19ffa9bad111b8d01cd&redirect_uri=https://petmates.co.kr/oauth/redirect/kakao&response_type=code&scope=profile_nickname,profile_image,account_email';
            window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=06255b2f3a6bd19ffa9bad111b8d01cd&redirect_uri=http://localhost:3000/oauth/redirect/kakao&response_type=code&scope=profile_nickname,profile_image,account_email';
          }}>
          <img className='kakao-button-img' src='/imgs/kakaoLogin.png' alt='kakao icon' />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
