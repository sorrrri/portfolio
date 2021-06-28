import React from "react";
import { Link } from "react-router-dom";

const BoardView = () => {

  return (
    <main class="sub wrapper board-view">
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
          <a href="#">공지사항</a>
        </div>
        <div class="title">
          <h2>공지사항</h2>
          <p>도서출판 구민사가 전해드리는 공지사항입니다.</p>
        </div>
        <div class="view-content">
          <div class="view-header">
            <div class="view-title">도서출판 미전사인언스 및 도서출판 미광 출고</div>
            <div class="writer">구민사</div>
            <ul>
              <li class="date">2021-04-26</li>
              <li class="views">11</li>
            </ul>
          </div>
          <div class="description">
            <p>안녕하세요 구민사 입니다.</p>
            <p>다음 출판사에 관하여 사업적권한을 이양 받았으니 업무에 참조 바랍니다.</p>        
            <p>도서출판 미전사이언스(113-90-30626)</p>        
            <p>도서출판 미광(113-91-01808)</p>        
            <p>5월1일 부터 모든 사업적인 권한 및 판매에 관한 권한을 구민사에서 이양 받아 출고를 시작하니 모든 서점 및 독자분들은 당사에 문의하시면 최선을 다해 답변하여 드리겠습니다.</p>
            <p>감사합니다.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BoardView