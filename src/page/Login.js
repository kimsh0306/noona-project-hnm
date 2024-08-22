import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {

  const navigate = useNavigate();
  const logingUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='title-area'>
          <h1>로그인</h1>
          <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
        </div>
        <form className='form-area' onSubmit={(event) => logingUser(event)}>
          <label htmlFor="login-id">아이디</label>
          <input type="text" id="login-id"></input>
          <label htmlFor="login-pw">비밀번호</label>
          <input type="password" id="login-pw"></input>
          <button type='submit'>로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login