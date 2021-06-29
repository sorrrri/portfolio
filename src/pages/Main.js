import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Main = () => {

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    arrows: true,
    dots: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ]
  };

  const boooksSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  }

  const bookstoreSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <main className="wrapper main">
      <section className="slider">
        <Slider className="main-slider" {...mainSliderSettings}>
          <div>
            <img src={require("../assets/images/banner/main_03.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/banner/main_02.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/banner/main_03.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/banner/main_04.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/banner/main_05.jpg")} alt="" />
          </div>
        </Slider>
      </section>
      <section className="books-new">
        <h1>신간도서</h1>
        <Slider className="books-slider" {...boooksSliderSettings}>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/01.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/02.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>자동차는 인간과 더불어 진화한다</li>
              <li>자동차인간학 연구회</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/01.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/02.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>자동차는 인간과 더불어 진화한다</li>
              <li>자동차인간학 연구회</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/01.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/02.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>자동차는 인간과 더불어 진화한다</li>
              <li>자동차인간학 연구회</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/01.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/02.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>자동차는 인간과 더불어 진화한다</li>
              <li>자동차인간학 연구회</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/01.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="">
            <img
              src={require("../assets/images/thumbnails/02.jpg")}
              alt="샘플이미지"
            />
            <ul>
              <li>자동차는 인간과 더불어 진화한다</li>
              <li>자동차인간학 연구회</li>
              <li>16,000원</li>
            </ul>
          </Link>
        </Slider>
      </section>
      <section className="row">
        <div className="boards">
          <div className="tab-menu">
            <ul>
              <li>공지사항</li>
              <li>자료실</li>
              <li>정오표</li>
            </ul>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
          </div>
          <div className="tab-content">
            <section className="notice">
              <Link to="">
                <span>도서출판 미전사인언스 및 도서출판 미광</span>
                <small>2021-04-26</small>
              </Link>
              <Link to="">
                <span>2020년 하계휴가 공지(2020 8.6 ~ 8.9)</span>
                <small>2020-08-05</small>
              </Link>
              <Link to="">
                <span>재고확인 서점 전화번호</span>
                <small>2018-11-14</small>
              </Link>
              <Link to="">
                <span>피부미용사 실기 교환에 대한 공지</span>
                <small>2018-03-29</small>
              </Link>
              <Link to="">
                <span>질의응답 게시에 관한 안내</span>
                <small>2015-01-15</small>
              </Link>
            </section>
            <section className="downloads">
              <Link to="">
                <span>JSP(이해하기 쉬운 예제중심 Java Sever Pa</span>
                <small>2021-04-28</small>
              </Link>
              <Link to="">
                <span>PLC데이터통신 소스자료</span>
                <small>2021-04-22</small>
              </Link>
              <Link to="">
                <span>전산회계2급 기출문제</span>
                <small>2021-04-05</small>
              </Link>
              <Link to="">
                <span>전산회계2급 실기모의고사</span>
                <small>2021-04-05</small>
              </Link>
              <Link to="">
                <span>전산회계2급 실습 파일</span>
                <small>2021-04-05</small>
              </Link>
            </section>
            <section className="errata">
              <Link to="">
                <span>2021 대기환경산업기사 과년도 정오표</span>
                <small>2021-05-14</small>
              </Link>
              <Link to="">
                <span>2021 대기환경기사 과년도 정오표</span>
                <small>2021-05-14</small>
              </Link>
              <Link to="">
                <span>2021 수질환경산업기사 과년도 정오표</span>
                <small>2021-05-14</small>
              </Link>
              <Link to="">
                <span>2021 수질환경기사 과년도 정오표</span>
                <small>2021-05-14</small>
              </Link>
              <Link to="">
                <span>2021 폐기물처리기사 과년도 정오표</span>
                <small>2021-05-14</small>
              </Link>
            </section>
          </div>
        </div>
        <div className="icon-menu">
          <Link to="/bookstore">서점안내</Link>
          <Link to="/publish">출판문의</Link>
          <Link to="/group-buying">공동구매</Link>
          <Link to="/books-all">도서정보목록</Link>

          <Link to="/lecture-material">강의자료실</Link>
          <Link to="/sample-books">견본도서</Link>
        </div>
      </section>
      <section className="bookstore">
        <Slider className="bookstore-slider" {...bookstoreSliderSettings}>
          <Link to="http://www.kyobobook.co.kr">
            <img
              src={require("../assets/images/logo/kyobo.gif")}
              alt="교보문고 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.yes24.com/home/default.asp?SID=iuEqSs">
            <img
              src={require("../assets/images/logo/yes24.gif")}
              alt="yes24 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.interpark.com/bookPark/html/book.html">
            <img
              src={require("../assets/images/logo/interpark.gif")}
              alt="인터파크 도서 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.aladin.co.kr/">
            <img
              src={require("../assets/images/logo/aladin.gif")}
              alt="알라딘 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://duck-sung.co.kr/">
            <img
              src={require("../assets/images/logo/ducksung.gif")}
              alt="서울덕성기술학원 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.web1978.or.kr/index.php">
            <img
              src={require("../assets/images/logo/hyundai.gif")}
              alt="현대 CAD 디자인 직업 전문학교 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.sm6000.co.kr/index.html">
            <img
              src={require("../assets/images/logo/sungmin.gif")}
              alt="성민열관리기술학원 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.환경에듀.com/">
            <img
              src={require("../assets/images/logo/jeon.gif")}
              alt="전쌤의 환경에듀 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.hrdkorea.or.kr">
            <img
              src={require("../assets/images/logo/hrdkorea.gif")}
              alt="한국산업인력공단 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.dbedu.or.kr/w/main/main.do">
            <img
              src={require("../assets/images/logo/dbedu.gif")}
              alt="서울동부기술교육원 홈페이지 바로가기"
            />
          </Link>
          <Link to="http://www.bukedu.or.kr/home/homeIndex.do">
            <img
              src={require("../assets/images/logo/bukedu.gif")}
              alt="서울북부기술교육원 홈페이지 바로가기"
            />
          </Link>
        </Slider>
      </section>
    </main>
  );
};

export default Main;
