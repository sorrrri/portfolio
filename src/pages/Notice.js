import React from "react";
import { Link } from "react-router-dom";
import { AsideCS } from "../components/AsideCS";

const Notice = () => {

  return (
    <main className="sub list wrapper">
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
        <div className="table-header">
          <div className="search">
            <div className="selectbox">
              <select name="" id="">
                <option value="">제목</option>
                <option value="">작성자</option>
                <option value="">내용</option>
                <option value="">전체</option>
              </select>
            </div>
            <input type="search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </div>
        </div>
          <div className="table">
            <ul className="row title">
              <li className="counter">번호</li>
              <li className="book-title">제목</li>
              <li className="writer">작성자</li>
              <li className="date">작성일</li>
              <li className="views">조회수</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
            <ul className="row">
              <li className="counter">17</li>
              <li className="book-title">도서출판 미전사인언스 및 도서출판 미광 출고</li>
              <li className="writer">구민사</li>
              <li className="date">2021-04-26</li>
              <li className="views">11</li>
            </ul>
          </div>
          <div className="table-footer">
            <div className="pagenation">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </a>
              <a className="active" href="">1</a>
              <a href="#">2</a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </main>
  )
}

export default Notice