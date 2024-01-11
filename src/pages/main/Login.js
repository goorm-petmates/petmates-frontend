import '../styles/StyleLogin.css';
import Button from "/Users/jiyeong/WebstormProjects/pet/petmates_frontend/src/components/Button.js";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };
  return (
    <div>
      <h1>로그인페이지</h1>
      <div className={"loginContainer"}>
        <div className={"loginLogo"}>
          <img src={""} alt={"Logo"}/>
        </div>

        <p>서비스 이용을 위해 로그인을 해주세요:)</p>

        <div className={"MemberLoginInputs"}>
          <input type={"text"} placeholder={"ID"}/>
          <input type={"text"} placeholder={"PASSWORD"}/>
        </div>
        <Button onClick={() => navigateToPage('/')} value="로그인"/>
        <div className={"MemberLoginButtons"}>
          <button onClick={() => navigateToPage('/findInfo')}>아이디/비밀번호 찾기</button>
          <button onClick={() => navigateToPage('/join')}>회원가입</button>
        </div>

      </div>
    </div>
  );
}

export default Login;