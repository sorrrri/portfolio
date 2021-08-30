import React, { useEffect } from "react";
import { AsideAccounts } from "../components/AsideAccounts";

const Mypage = () => {
  useEffect(() => {
    const common = document.getElementById("userCommon");
    const professor = document.getElementById("userProfessor");
    const inputProfessor = document.querySelectorAll(".input-professor");

    common.addEventListener("change", () => {
      inputProfessor.forEach((input) => {
        input.classList.remove("active");
      });
    });

    professor.addEventListener("change", () => {
      inputProfessor.forEach((input) => {
        input.classList.add("active");
      });
    });
  });

  return (
    <main className="sub mypage wrapper">
      <AsideAccounts />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">회원정보</a>
          <a href="#">마이페이지</a>
        </div>
        <div className="title">
          <h2>마이페이지</h2>
          <p>회원님의 정보를 확인 및 수정하는 페이지입니다.</p>
        </div>
        <section>
          <ul className="inputs">
            <li>
              <span className="required">구분</span>
              <div>
                <input
                  type="radio"
                  id="userCommon"
                  name="userType"
                  defaultChecked
                />
                <label htmlFor="userCommon">일반</label>
                <input type="radio" id="userProfessor" name="userType" />
                <label htmlFor="userProfessor">교수</label>
              </div>
            </li>
            <li className="input-professor">
              <span className="required">대학명</span>
              <input type="text" />
            </li>
            <li className="input-professor">
              <span className="required">학과</span>
              <input type="text" />
            </li>
            <li>
              <span className="required">이름</span>
              <input type="text" defaultValue="홍길동" readOnly />
            </li>
            <li>
              <span className="required">ID</span>
              <input type="text" defaultValue="test" readOnly />
            </li>
            <li>
              <span className="required">현재 비밀번호</span>
              <input type="password" defaultValue="" />
            </li>
            <li>
              <span className="required">신규 비밀번호</span>
              <input type="password" defaultValue="" />
              <small>
                ※ 영문과 숫자를 혼용하여 6~12자리로 하며, 특수문자는 사용하지
                않습니다.
              </small>
            </li>
            <li>
              <span className="required">이메일</span>
              <input type="email" defaultValue="hong@naver.com" />
            </li>
            <li className="phone">
              <span className="required">전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li className="phone">
              <span className="required">휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li className="address">
              <span className="required">주소</span>
              <input type="text" />
            </li>
            <li>
              <span>회원탈퇴</span>
              <button>회원탈퇴</button>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn-sub">취소</button>
            <button className="btn-main">정보수정</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Mypage;
