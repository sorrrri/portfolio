import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="sub login wrapper">
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">로그인</a>
        </div>
        <section>
          <div className="login-content">
            <h2>로그인</h2>
            <div className="row">
              <label htmlFor="inputID">ID</label>
              <input id="inputID" type="text" />
            </div>
            <div className="row">
              <label htmlFor="inputPassword">Password</label>
              <input id="inputPassword" type="password" />
            </div>
            <div className="checkbox">
              <input id="rememberID" type="checkbox" />
              <label htmlFor="rememberID">아이디 저장</label>
            </div>
            <button className="btn-main">로그인</button>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
