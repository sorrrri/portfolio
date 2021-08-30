import React from "react";
import { Link } from "react-router-dom";
import { AsideCS } from "../components/AsideCS";

const Academy = () => {

  return (
    <main className="sub bookstore wrapper">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="/#">Home</a>
          <a href="/#">정보안내</a>
          <a href="/#">학원안내</a>
        </div>
        <div className="title">
          <h2>학원안내</h2>
          <p>
            도서출판 구민사의 서적과 함께하는 학원안내입니다.
          </p>
        </div>
        <section>
          <div className="links">
            <Link to="http://www.bukedu.or.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/bukedu.jpg")} alt="북부기술교육원 사이트 바로가기" />
              </div>
              <span>북부기술교육원</span>
            </Link>
            <Link to="http://suwonmotor.co.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/suwonmotor.jpg")} alt="현대직업전문학교 사이트 바로가기" />
              </div>
              <span>현대직업전문학교</span>
            </Link>
            <Link to="http://www.hdin.co.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/hdin.jpg")} alt="현대건축학원 사이트 바로가기" />
              </div>
              <span>현대건축학원</span>
            </Link>
            <Link to="http://www.web1978.or.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/hyundaicad.jpg")} alt="예스현대 직업전문학교 사이트 바로가기" />
              </div>
              <span>예스현대 직업전문학교</span>
            </Link>
            <Link to="#" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/segi.jpg")} alt="세기기술학원 사이트 바로가기" />
              </div>
              <span>세기기술학원</span>
            </Link>
            <Link to="http://www.duck-sung.co.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/ducksung.jpg")} alt="서울덕성기술학원 사이트 바로가기" />
              </div>
              <span>서울덕성기술학원</span>
            </Link>
            <Link to="http://www.dbedu.or.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/dbedu.jpg")} alt="동부기술교육원 사이트 바로가기" />
              </div>
              <span>동부기술교육원</span>
            </Link>
            <Link to="https://efxclub.com" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/efx.jpg")} alt="엘리트 FOREX트레이더스 클럽 사이트 바로가기" />
              </div>
              <span>엘리트 FOREX트레이더스 클럽</span>
            </Link>
            <Link to="http://www.sm6000.co.kr" target="_blank">
              <div className="image">
                <img src={require("../assets/images/logo/academy/sungmin.jpg")} alt="성민기술고시학원 사이트 바로가기" />
              </div>
              <span>성민기술고시학원</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Academy