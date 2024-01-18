import '../../styles/StyleLogin.css';
import Header from "../../components/Header";
import LeftAside from "../../components/LeftAside";
import RightAside from "../../components/RightAside";
import Nav from "../../components/Nav";
function Login() {
  return (
    <div className="element">
      <Header />
      <Nav/>
      <LeftAside />
      <RightAside />

      <div className="login">
        <img className="login-logo" alt="Logo" src="/imgs/Logo.png" />
        <p className="login-info">
          서비스 이용을 위해 로그인 해주세요 :)
        </p>
        <button className="kakao-button">
          <img src="/imgs/Logo.png" alt="kakao icon" />
        </button>
      </div>
    </div>
  );
}

export default Login;