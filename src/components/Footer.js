import React from "react"
import { Link } from "react-router-dom"


export const Footer = () => {

  return (
    <footer>
      <ul className="sitemap">
        <li><Link to="/about">회사소개</Link></li>
        <li><Link to="/policy">이용약관</Link></li>
        <li><Link to="/bookstore">서점안내</Link></li>
        <li><Link to="/notice">고객센터</Link></li>
        <li><Link to="/books_all">도서정보목록</Link></li>
      </ul>
      <div className="wrapper">
        <ul className="information">
          <li>
            <address>
              (07293) 서울 영등포구 문래북로 116, 604~605호(문래동 3가,
              트리플렉스)
            </address>
          </li>
          <li>전화번호: 02-701-7421~2</li>
          <li>팩스번호: 02-3723-9642</li>
          <li>사업자등록번호: 101-98-52093</li>
          <li>통신판매신고번호: 제2014-서울영등포-0492호</li>
          <li>대표이사: 조규백</li>
          <li>
            대표이메일:
            <Link to="mailto:kuhminsa@kuhminsa.co.kr">kuhminsa@kuhminsa.co.kr</Link>
          </li>
          <li>호스팅제공자: (주)아이티칸</li>
          <li>도서출판 구민사 CopyrightⓒKuhminsa all right Reserved.</li>
        </ul>
        <div className="logo"></div>
      </div>
    </footer>
  )
}