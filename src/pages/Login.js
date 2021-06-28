import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <main class="sub login wrapper">
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">로그인</a>
        </div>
        <section>
          <div class="login-content">
            <h2>로그인</h2>
            <div class="row">
              <label for="inputID">ID</label>
              <input id="inputID" type="text" />
            </div>
            <div class="row">
              <label for="inputPassword">Password</label>
              <input id="inputPassword" type="password" />
            </div>
            <div class="checkbox">
              <input id="rememberID" type="checkbox" />
              <label for="rememberID">아이디 저장</label>
            </div>
            <button class="btn-main">로그인</button>
            <button onclick="location.href='signup.html'">회원가입</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login