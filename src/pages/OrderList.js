import React from "react";
import { AsideAccounts } from "../components/AsideAccounts";

const OrderList = () => {

  return (
    <main className="sub board-03 wrapper">
      <AsideAccounts />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">구매정보</a>
          <a href="#">주문배송조회</a>
        </div>
        <div className="title">
          <h2>주문배송조회</h2>
          <p>고객님의 주문 및 배송 내역을 조회하실 수 있습니다.</p>
        </div>
        <section>
          <div className="table">
            <ul className="row title">
              <li>번호</li>
              <li>주문번호</li>
              <li>상품평</li>
              <li>결제금액</li>
              <li>주문일</li>
              <li>주문/배송상태</li>
              <li>비고</li>
            </ul>
            <ul className="row">
              <li>1</li>
              <li>H2021051305118</li>
              <li>유니그래픽스-NX7 3D모델링 프로젝트</li>
              <li>27,000원</li>
              <li>2021-05-13</li>
              <li>주문취소</li>
              <li></li>
            </ul>
            <ul className="row">
              <li>1</li>
              <li>H2021051305118</li>
              <li>유니그래픽스-NX7 3D모델링 프로젝트</li>
              <li>27,000원</li>
              <li>2021-05-13</li>
              <li>주문취소</li>
              <li></li>
            </ul>
            <ul className="row">
              <li>1</li>
              <li>H2021051305118</li>
              <li>유니그래픽스-NX7 3D모델링 프로젝트</li>
              <li>27,000원</li>
              <li>2021-05-13</li>
              <li>주문취소</li>
              <li></li>
            </ul>
            <ul className="row">
              <li>1</li>
              <li>H2021051305118</li>
              <li>유니그래픽스-NX7 3D모델링 프로젝트</li>
              <li>27,000원</li>
              <li>2021-05-13</li>
              <li>주문취소</li>
              <li></li>
            </ul>
          </div>
          <div className="table-footer">
            <div className="pagenation">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </a>
              <a className="active" href="">1</a>
              <a href="#">2</a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default OrderList