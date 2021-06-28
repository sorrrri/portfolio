import React from "react";
import { Link } from "react-router-dom";

const Academy = () => {

  return (
    <main className="sub bookstore wrapper">
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
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">정보안내</a>
          <a href="#">학원안내</a>
        </div>
        <div className="title">
          <h2>학원안내</h2>
          <p>
            도서출판 구민사의 서적과 함께하는 학원안내입니다.
          </p>
        </div>
        <section>
          <div className="links">
            <a href="http://www.bukedu.or.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/bukedu.jpg" alt="북부기술교육원 사이트 바로가기" />
              </div>
              <span>북부기술교육원</span>
            </a>
            <a href="http://suwonmotor.co.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/suwonmotor.jpg" alt="현대직업전문학교 사이트 바로가기" />
              </div>
              <span>현대직업전문학교</span>
            </a>
            <a href="http://www.hdin.co.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/hdin.jpg" alt="현대건축학원 사이트 바로가기" />
              </div>
              <span>현대건축학원</span>
            </a>
            <a href="http://www.web1978.or.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/hyundaicad.jpg" alt="예스현대 직업전문학교 사이트 바로가기" />
              </div>
              <span>예스현대 직업전문학교</span>
            </a>
            <a href="#" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/segi.jpg" alt="세기기술학원 사이트 바로가기" />
              </div>
              <span>세기기술학원</span>
            </a>
            <a href="http://www.duck-sung.co.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/ducksung.jpg" alt="서울덕성기술학원 사이트 바로가기" />
              </div>
              <span>서울덕성기술학원</span>
            </a>
            <a href="http://www.dbedu.or.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/dbedu.jpg" alt="동부기술교육원 사이트 바로가기" />
              </div>
              <span>동부기술교육원</span>
            </a>
            <a href="https://efxclub.com" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/efx.jpg" alt="엘리트 FOREX트레이더스 클럽 사이트 바로가기" />
              </div>
              <span>엘리트 FOREX트레이더스 클럽</span>
            </a>
            <a href="http://www.sm6000.co.kr" target="_blank">
              <div className="image">
                <img src="assets/images/logo/academy/sungmin.jpg" alt="성민기술고시학원 사이트 바로가기" />
              </div>
              <span>성민기술고시학원</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Academy