import React from "react";
import { AsideCS } from "../components/AsideCS";

const BoardView = () => {
  return (
    <main className="sub wrapper board-view">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">공지사항</a>
        </div>
        <div className="title">
          <h2>공지사항</h2>
          <p>도서출판 구민사가 전해드리는 공지사항입니다.</p>
        </div>
        <div className="view-content">
          <div className="view-header">
            <div className="view-title">
              도서출판 미전사인언스 및 도서출판 미광 출고
            </div>
            <div className="writer">구민사</div>
            <ul>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
          </div>
          <div className="description">
            <p>안녕하세요 구민사 입니다.</p>
            <p>
              다음 출판사에 관하여 사업적권한을 이양 받았으니 업무에 참조
              바랍니다.
            </p>
            <p>도서출판 미전사이언스(113-90-30626)</p>
            <p>도서출판 미광(113-91-01808)</p>
            <p>
              5월1일 부터 모든 사업적인 권한 및 판매에 관한 권한을 구민사에서
              이양 받아 출고를 시작하니 모든 서점 및 독자분들은 당사에
              문의하시면 최선을 다해 답변하여 드리겠습니다.
            </p>
            <p>감사합니다.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BoardView;
