import React from "react";
import { Link } from "react-router-dom";

const SampleBooks = () => {

  return (
    <main class="sub board-02 wrapper">
      <aside>
        <h3>교수님 전용</h3>
        <a href="lecture_material.html">강의자료실</a>
        <a href="sample_book.html">견본도서요청</a>
      </aside>
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">교수님 전용</a>
          <a href="#">견본도서요청</a>
        </div>
        <div class="title">
          <h2>견본도서요청</h2>
          <p>도서출판 구민사는 교수님들을 위한 견본도서를 지원하고 있습니다. 견본도서를 요청하여 주십시오.</p>
        </div>
        <section>
          <ul class="inputs">
            <li class="choose-books">
              <span class="required">신청도서</span>
              <button>도서등록</button>
              <span class="result">NCS기반 교육과정에 따른 바디경락마사지</span>
            </li>
            <li>
              <span class="required">저자</span>
              <input type="text" value="" readonly="readonly" />
            </li>
            <li>
              <span class="required">판권날짜</span>
              <input type="text" value="" readonly="readonly" />
            </li>
            <li>
              <span class="required">수량</span>
              <input type="number" value="" />
            </li>
            <li>
              <span class="required">이름</span>
              <input type="text" value="홍길동" readonly="readonly" />
            </li>
            <li>
              <span class="required">대학명</span>
              <input type="text" value="" readonly="readonly" />
            </li>
            <li>
              <span class="required">학과</span>
              <input type="text" value="" readonly="readonly" />
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
              <span class="required">내용</span>
              <textarea rows="10"></textarea>
            </li>
          </ul>
          <div class="buttons">
            <button class="btn-main">신청하기</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default SampleBooks