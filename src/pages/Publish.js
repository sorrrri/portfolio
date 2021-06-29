import React from "react";
import { AsideCS } from "../components/AsideCS";

const Publish = () => {

  return (
    <main className="sub board-02 wrapper">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">출판문의</a>
        </div>
        <div className="title">
          <h2>출판문의</h2>
          <p>도서출판 구민사는 저자의 출판계획과 관련된 문의를 기다립니다.</p>
        </div>
        <section>
          <ul className="inputs">
            <li>
              <span>이름</span>
              <input type="text" defaultValue="" />
            </li>
            <li>
              <span>이메일</span>
              <input type="email" defaultValue="" />
            </li>
            <li className="phone">
              <span>전화번호</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li className="phone">
              <span>휴대폰</span>
              <div>
                <input type="number" />
                <span>-</span>
                <input type="number" />
                <span>-</span>
                <input type="number" />
              </div>
            </li>
            <li>
              <span>내용</span>
              <textarea name="" id="" rows="10"></textarea>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn-main">신청하기</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Publish