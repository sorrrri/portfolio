import React from "react";
import { AsideCS } from "../components/AsideCS";

const GroupBuying = () => {
  return (
    <main className="sub list wrapper">
      <AsideCS />
      <div className="content">
        <div className="breadscrumb">
          <a href="#">Home</a>
          <a href="#">고객센터</a>
          <a href="#">공동구매</a>
        </div>
        <div className="title">
          <h2>공동구매</h2>
          <p>공동구매 요청정보를 입력하세요.</p>
        </div>
        <ul className="inputs">
          <li>
            <span className="required">대학명</span>
            <input type="text" defaultValue="" />
          </li>
          <li>
            <span className="required">학과</span>
            <input type="text" defaultValue="" />
          </li>
          <li>
            <span className="required">학년</span>
            <input type="text" defaultValue="" />
          </li>
          <li>
            <span className="required">강의 교수님</span>
            <input type="text" defaultValue="" />
          </li>
          <li>
            <span className="required">주문자 성명</span>
            <input type="text" defaultValue="홍길동" readOnly />
          </li>
          <li>
            <span className="required">이메일</span>
            <input type="email" defaultValue="hong@naver.com" />
          </li>
          <li>
            <span className="required">ID</span>
            <input type="text" defaultValue="test" readOnly />
          </li>
          <li className="phone">
            <span className="required">전화번호</span>
            <div>
              <input type="number" />
              <span>-</span>
              <input type="number" />
              <span>-</span>
              <input type="number" />
            </div>
          </li>
          <li className="phone">
            <span className="required">휴대폰</span>
            <div>
              <input type="number" />
              <span>-</span>
              <input type="number" />
              <span>-</span>
              <input type="number" />
            </div>
          </li>
          <li className="address">
            <span className="required">주소</span>
            <input className="test" type="text" />
          </li>
          <li className="choose-books">
            <span className="required">구매도서</span>
            <div>
              <button>도서등록</button>
              <div className="table">
                <ul className="row title">
                  <li>대분류</li>
                  <li>소분류</li>
                  <li>사진</li>
                  <li>상품명</li>
                  <li>수량</li>
                  <li>가격</li>
                  <li>버튼</li>
                </ul>
                <ul className="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li>
                    <img src={require("../assets/images/thumbnails/01.jpg")} alt="" />
                  </li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
                <ul className="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li>
                    <img src={require("../assets/images/thumbnails/01.jpg")} alt="" />
                  </li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
                <ul className="row">
                  <li>전문교재</li>
                  <li>피부계열</li>
                  <li>
                    <img src={require("../assets/images/thumbnails/01.jpg")} alt="" />
                  </li>
                  <li>NCS기반 교육과정에 따른 바디경락마사지</li>
                  <li>10</li>
                  <li>13,000</li>
                  <li>
                    <button>삭제</button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn-main">신청하기</button>
        </div>
      </div>
      <div className="modal modal-books">
        <header>
          <div className="title">
            <h3>주문도서 등록</h3>
            <svg
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
          <section className="search">
            <input type="text" placeholder="도서명을 입력하세요." />
            <button>검색</button>
          </section>
        </header>
        <div className="modal-content">
          <section className="books-results">
            <div className="table">
              <ul className="row title">
                <li className="book-image">사진</li>
                <li className="book-information">정보</li>
                <li className="book-quantity">수량</li>
                <li className="buttons">버튼</li>
              </ul>
              <ul className="row">
                <li className="book-image">
                  <img
                    src={require("../assets/images/thumbnails/01.jpg")}
                    alt=""
                  />
                </li>
                <li className="book-information">
                  <div>
                    <span>상품명</span>
                    <span>NCS기반 교육과정에 따른 바디경락마사지</span>
                  </div>
                  <div>
                    <span>저자</span>
                    <span>오지민</span>
                  </div>
                  <div>
                    <span>단가</span>
                    <span>13,000</span>
                  </div>
                </li>
                <li className="book-quantity">
                  <input type="number" defaultValue="10" />
                </li>
                <li className="buttons">
                  <button>선택</button>
                </li>
              </ul>
              <ul className="row">
                <li className="book-image">
                  <img
                    src={require("../assets/images/thumbnails/01.jpg")}
                    alt=""
                  />
                </li>
                <li className="book-information">
                  <div>
                    <span>상품명</span>
                    <span>NCS기반 교육과정에 따른 바디경락마사지</span>
                  </div>
                  <div>
                    <span>저자</span>
                    <span>오지민</span>
                  </div>
                  <div>
                    <span>단가</span>
                    <span>13,000</span>
                  </div>
                </li>
                <li className="book-quantity">
                  <input type="number" defaultValue="10" />
                </li>
                <li className="buttons">
                  <button>선택</button>
                </li>
              </ul>
              <ul className="row">
                <li className="book-image">
                  <img
                    src={require("../assets/images/thumbnails/01.jpg")}
                    alt=""
                  />
                </li>
                <li className="book-information">
                  <div>
                    <span>상품명</span>
                    <span>NCS기반 교육과정에 따른 바디경락마사지</span>
                  </div>
                  <div>
                    <span>저자</span>
                    <span>오지민</span>
                  </div>
                  <div>
                    <span>단가</span>
                    <span>13,000</span>
                  </div>
                </li>
                <li className="book-quantity">
                  <input type="number" defaultValue="10" />
                </li>
                <li className="buttons">
                  <button>선택</button>
                </li>
              </ul>
              <ul className="row">
                <li className="book-image">
                  <img
                    src={require("../assets/images/thumbnails/01.jpg")}
                    alt=""
                  />
                </li>
                <li className="book-information">
                  <div>
                    <span>상품명</span>
                    <span>NCS기반 교육과정에 따른 바디경락마사지</span>
                  </div>
                  <div>
                    <span>저자</span>
                    <span>오지민</span>
                  </div>
                  <div>
                    <span>단가</span>
                    <span>13,000</span>
                  </div>
                </li>
                <li className="book-quantity">
                  <input type="number" defaultValue="10" />
                </li>
                <li className="buttons">
                  <button>선택</button>
                </li>
              </ul>
              <ul className="row">
                <li className="book-image">
                  <img
                    src={require("../assets/images/thumbnails/01.jpg")}
                    alt=""
                  />
                </li>
                <li className="book-information">
                  <div>
                    <span>상품명</span>
                    <span>NCS기반 교육과정에 따른 바디경락마사지</span>
                  </div>
                  <div>
                    <span>저자</span>
                    <span>오지민</span>
                  </div>
                  <div>
                    <span>단가</span>
                    <span>13,000</span>
                  </div>
                </li>
                <li className="book-quantity">
                  <input type="number" defaultValue="10" />
                </li>
                <li className="buttons">
                  <button>선택</button>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="modal modal-address">
        <header>
          <div className="title">
            <h3>주소 찾기</h3>
            <svg
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </div>
          <section>
            <p>
              검색어(도로명,건물명,지번)를 입력해주세요(지번+도로명 통합 검색)
            </p>
          </section>
          <section className="search">
            <input
              type="text"
              placeholder='예) "서소문로 26" 또는 "중림동 157-2'
            />
            <button>검색</button>
          </section>
        </header>
        <div className="modal-content">
          <section className="address-results">
            <div className="table">
              <ul className="row title">
                <li>우편번호</li>
                <li>주소</li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
              <ul className="row">
                <li>04504</li>
                <li>
                  <div>서울특별시 중구 서소문로 26 (중림동)</div>
                  <div>서울특별시 중구 중림동 157-2</div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="overlay"></div>
    </main>
  );
};

export default GroupBuying;
