import React from "react";
import { AsideAccounts } from "../components/AsideAccounts";
import { Link } from "react-router-dom";

const ShoppingBag = () => {
  return (
    <main className="sub shoppingbag wrapper">
      <AsideAccounts />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">구매정보</a>
          <a href="#">장바구니</a>
        </div>
        <div className="title">
          <h2>장바구니</h2>
          <p>고객님의 장바구니입니다.</p>
        </div>
        <section>
          <div className="table">
            <ul className="row title">
              <li>사진</li>
              <li>도서명</li>
              <li>수량</li>
              <li>합계</li>
              <li>비고</li>
            </ul>
            <ul className="row">
              <li>
                <img
                  src={require("../assets/images/thumbnails/01.jpg")}
                  alt=""
                />
              </li>
              <li>뷰티 트렌드</li>
              <li>1</li>
              <li>16,000원</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </li>
            </ul>
            <ul className="row">
              <li>
                <img
                  src={require("../assets/images/thumbnails/01.jpg")}
                  alt=""
                />
              </li>
              <li>뷰티 트렌드</li>
              <li>1</li>
              <li>16,000원</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </li>
            </ul>
            <ul className="row">
              <li>
                <img
                  src={require("../assets/images/thumbnails/01.jpg")}
                  alt=""
                />
              </li>
              <li>뷰티 트렌드</li>
              <li>1</li>
              <li>16,000원</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </li>
            </ul>
          </div>
          <ul className="total">
            <li>
              <span>총 상품금액</span>
              <span className="price">16,000</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </li>
            <li>
              <span>배송비</span>
              <span className="price">2500</span>
            </li>
            <li>
              <span>결제하실 금액</span>
              <span className="price">18,500</span>
            </li>
          </ul>
          <div className="buttons">
            <Link to="">
              <button className="btn-sub" onClick={() => history.back()}>
                쇼핑계속하기
              </button>
            </Link>
            <Link to="/order">
              <button className="btn-main">
                주문하기
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ShoppingBag;
