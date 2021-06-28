import React from "react";
import { Link } from "react-router-dom";

const GroupBuying = () => {

  return (
    <main class="sub list wrapper">
      <aside>
        <h3>고객센터</h3>
        <a href="notice.html">공지사항</a>
        <a href="errata.html">정오표</a>
        <a href="downloads.html">자료실</a>
        <a href="books_all.html">도서목록 전체보기</a>
        <div>
          <h4>정보안내</h4>
          <a href="bookstore.html">서점안내</a>
          <a href="academy.html">학원안내</a>
          <a href="returns.html">반품/교환안내</a>
        </div>
        <div>
          <h4>요청하기</h4>
          <a href="qna.html">질의응답</a>
          <a href="publish.html">출판문의</a>
          <a href="group_buying.html">공동구매</a>
        </div>
      </aside>
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">공동구매</a>
        </div>
        <div class="title">
          <h2>공동구매</h2>
          <p>공동구매 요청정보를 입력하세요.</p>
        </div>
        <ul class="inputs">
          <li>
            <span class="required">대학명</span>
            <input type="text" value="" />
          </li>
          <li>
            <span class="required">학과</span>
            <input type="text" value="" />
          </li>
          <li>
            <span class="required">학년</span>
            <input type="text" value="" />
          </li>
          <li>
            <span class="required">강의 교수님</span>
            <input type="text" value="" />
          </li>
          <li>
            <span class="required">주문자 성명</span>
            <input type="text" value="홍길동" readonly="readonly" />
          </li>
          <li>
            <span class="required">이메일</span>
            <input type="email" value="hong@naver.com" />
          </li>
          <li>
            <span class="required">ID</span>
            <input type="text" value="test" readonly="readonly" />
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
            <input class="test" type="text" />
          </li>
          <li class="choose-books">
            <span class="required">구매도서</span>
            <div>
              <button>도서등록</button>
              <div class="table">
                <ul class="row title">
                  <li>대분류</li>
                  <li>소분류</li>
                  <li>사진</li>
                  <li>상품명</li>
                  <li>수량</li>
                  <li>가격</li>
                  <li>버튼</li>
                </ul>
                <ul class="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li><img src="assets/images/thumbnails/01.jpg" alt="" /></li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
                <ul class="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li><img src="assets/images/thumbnails/01.jpg" alt="" /></li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
                <ul class="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li><img src="assets/images/thumbnails/01.jpg" alt="" /></li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="buttons">
          <button class="btn-main">신청하기</button>
        </div>
      </div>
    </main>
  )
}

export default GroupBuying