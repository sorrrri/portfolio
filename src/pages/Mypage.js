import React from "react";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <main class="sub mypage wrapper">
      <aside>
        <h3>회원정보</h3>
        <a href="shoppingbag.html">장바구니</a>
        <a href="order_list.html">주문배송조회</a>
        <a href="mypage.html">마이페이지</a>
      </aside>
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">회원정보</a>
          <a href="#">마이페이지</a>
        </div>
        <div class="title">
          <h2>마이페이지</h2>
          <p>회원님의 정보를 확인 및 수정하는 페이지입니다.</p>
        </div>
        <section>
          <ul class="inputs">
            <li>
              <span class="required">구분</span>
              <div>
                <input
                  type="radio"
                  id="userCommon"
                  name="userType"
                  checked="checked"
                />
                <label for="userCommon">일반</label>
                <input type="radio" id="userProfessor" name="userType" />
                <label for="userProfessor">교수</label>
              </div>
            </li>
            <li class="input-professor">
              <span class="required">대학명</span>
              <input type="text" />
            </li>
            <li class="input-professor">
              <span class="required">학과</span>
              <input type="text" />
            </li>
            <li>
              <span class="required">이름</span>
              <input type="text" value="홍길동" readonly="readonly" />
            </li>
            <li>
              <span class="required">ID</span>
              <input type="text" value="test" readonly="readonly" />
            </li>
            <li>
              <span class="required">현재 비밀번호</span>
              <input type="password" value="" />
            </li>
            <li>
              <span class="required">신규 비밀번호</span>
              <input type="password" value="" />
              <small>
                ※ 영문과 숫자를 혼용하여 6~12자리로 하며, 특수문자는 사용하지
                않습니다.
              </small>
            </li>
            <li>
              <span class="required">이메일</span>
              <input type="email" value="hong@naver.com" />
            </li>
            <li class="phone">
              <span class="required">전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li class="phone">
              <span class="required">휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li class="address">
              <span class="required">주소</span>
              <input type="text" />
            </li>
            <li>
              <span>회원탈퇴</span>
              <button>회원탈퇴</button>
            </li>
          </ul>
          <div class="buttons">
            <button class="btn-sub">취소</button>
            <button class="btn-main">정보수정</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Mypage;
