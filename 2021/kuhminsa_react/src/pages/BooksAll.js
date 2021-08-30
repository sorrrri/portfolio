import React from "react";
import { AsideCS } from "../components/AsideCS";

const BooksAll = () => {

  return (
    <main className="sub list-books wrapper">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">도서목록 전체보기</a>
        </div>
        <div className="title">
          <h2>도서목록 전체보기</h2>
          <p>
            도서출판 구민사의 도서 전체 목록입니다. 해당 도서를 선택하시면 자세한
            정보를 볼 수 있습니다.
          </p>
        </div>
        <div className="table">
          <ul className="row title">
            <li className="categories">위치</li>
            <li className="book-title">도서명</li>
            <li className="author">저자</li>
            <li className="day">발행정보</li>
            <li className="price">가격</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
          </ul>
          <ul className="row">
            <li className="categories">전문교재 &gt; 메이크업계열</li>
            <li className="book-title">패션과 정신분석학</li>
            <li className="author">앨리슨 밴크로</li>
            <li className="day">2019-09-06초판</li>
            <li className="price">18,000</li>
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
          <div className="buttons">
            <button className="btn-main">도서목록 다운로드</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BooksAll