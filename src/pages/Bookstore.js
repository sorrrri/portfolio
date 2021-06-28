import React from "react";
import { Link } from "react-router-dom";

const Bookstore = () => {

  return (
    <main class="sub bookstore wrapper">
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
      <div class="content">
        <div class="breadscrumb">
          <a href="#">Home</a>
          <a href="#">정보안내</a>
          <a href="#">서점안내</a>
        </div>
        <div class="title">
          <h2>서점안내</h2>
          <p>
            도서출판 구민사의 서적을 만날 수 있는 온라인 서점 및 전국 오프라인
            서점정보입니다.
          </p>
        </div>
        <section>
          <h3>온라인 서점</h3>
          <div class="links">
            <a href="http://www.kyobobook.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/kyobo.jpg" alt="교보문고 사이트 바로가기" />
              </div>
              <span>교보문고</span>
            </a>
            <a href="http://www.ypbooks.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/ypbooks.jpg" alt="영풍문고 사이트 바로가기" />
              </div>
              <span>영풍문고</span>
            </a>
            <a href="http://book.interpark.com" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/interpark.jpg" alt="인터파크 도서 사이트 바로가기" />
              </div>
              <span>인터파크도서</span>
            </a>
            <a href="http://www.yes24.com" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/yes24.jpg" alt="예스24 사이트 바로가기" />
              </div>
              <span>예스24</span>
            </a>
            <a href="http://www.bandinlunis.com" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/bandinlunis.jpg" alt="반디앤루니스 사이트 바로가기" />
              </div>
              <span>반디앤루니스</span>
            </a>
            <a href="https://books.11st.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/11st.jpg" alt="도서11번가 사이트 바로가기" />
              </div>
              <span>도서11번가</span>
            </a>
            <a href="#" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/kjbooks.jpg" alt="검정서적 사이트 바로가기" />
              </div>
              <span>검정서적</span>
            </a>
            <a href="http://www.techbible.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/techbible.jpg" alt="Tech Bible 사이트 바로가기" />
              </div>
              <span>Tech Bible</span>
            </a>
            <a href="https://www.ykbook.com" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/ykbooks.jpg" alt="영광도서 사이트 바로가기" />
              </div>
              <span>영광도서</span>
            </a>
            <a href="https://www.libro.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/libro.jpg" alt="대교 Libro 사이트 바로가기" />
              </div>
              <span>대교 Libro</span>
            </a>
            <a href="https://www.aladin.co.kr" target="_blank">
              <div class="image">
                <img src="assets/images/logo/bookstore/aladin.jpg" alt="알라딘 사이트 바로가기" />
              </div>
              <span>알라딘</span>
            </a>
          </div>
        </section>
        <section>
          <h3>오프라인 서점</h3>
          <h4>서울지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>교보문고</li>
              <li>02)397-3631</li>
              <li>서울시 종로구 종로1가 1번지</li>
            </ul>
            <ul class="row">
              <li>영풍문고</li>
              <li>02)595-4700</li>
              <li>서울시 종로구 서린동 33번지</li>
            </ul>
            <ul class="row">
              <li>코엑스 서울문고</li>
              <li>02)553-3038</li>
              <li>서울시 강남구 삼성동 159 코엑스 지하아케이드</li>
            </ul>
            <ul class="row">
              <li>종로 서울문고</li>
              <li>02)2198-3038</li>
              <li>서울시 종로구 종로2가6 종로타워B2</li>
            </ul>
            <ul class="row">
              <li>영등포 G.S</li>
              <li>02)2671-5651</li>
              <li>서울시 영등포구 영등포동 4가 425-2</li>
            </ul>
            <ul class="row">
              <li>신림동 G.S</li>
              <li>02)872-5650</li>
              <li>서울시 관악구 신림동 86-3</li>
            </ul>
            <ul class="row">
              <li>마포)검정서적</li>
              <li>02)717-3849</li>
              <li>서울시 마포구 공덕동 385-13</li>
            </ul>
            <ul class="row">
              <li>마포)숭문서적</li>
              <li>02)3273-9724</li>
              <li>서울시 마포구 공덕동 385-239 한국산업인력공단 정문</li>
            </ul>
            <ul class="row">
              <li>신림)남부)공단기술</li>
              <li>02)878-2997</li>
              <li>서울시 관악구 신림본동 삼모스포렉스B/D 2F</li>
            </ul>
            <ul class="row">
              <li>신촌)홍익문고</li>
              <li>02)392-2020</li>
              <li>서울시 서대문구 창천동 18-49</li>
            </ul>
            <ul class="row">
              <li>동대문)알파</li>
              <li>02)2266-0445</li>
              <li>서울시 종로구 종로5가 277-1</li>
            </ul>
            <ul class="row">
              <li>수유동)북부전문</li>
              <li>02)908-0606</li>
              <li>서울시 강북구 수유동 130-24호</li>
            </ul>
            <ul class="row">
              <li>노유동)국가기술서적</li>
              <li>02)2205-3022</li>
              <li>서울시 광진구 노유2동 65-1 한국산업인력공단 동부지소입구</li>
            </ul>
            <ul class="row">
              <li>원효로)숭문정보</li>
              <li>02)702-0890</li>
              <li>서울시 용산구 청파동3가 130-5</li>
            </ul>
          </div>
        </section>
        <section>
          <h4>경기지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>부천)경인문고</li>
              <li>032)654-0059</li>
              <li>경기도 부천시 원미구 심곡2동 168-12</li>
            </ul>
            <ul class="row">
              <li>부평)씽크빅문고</li>
              <li>032)506-4100</li>
              <li>인천광역시 부평구 부평동 194-23</li>
            </ul>
            <ul class="row">
              <li>부평)부평문고</li>
              <li>032)529-0077</li>
              <li>인천광역시 부평구 부평1동 549-5</li>
            </ul>
            <ul class="row">
              <li>수원)석촌서점(성대)</li>
              <li>031)290-5438</li>
              <li></li>
            </ul>
            <ul class="row">
              <li>안양)대동서림</li>
              <li>031)447-7000</li>
              <li>경기도 안산시 고잔동 535-4번지 보배프라자 지하1층</li>
            </ul>
            <ul class="row">
              <li>안산)대동서적</li>
              <li>031)406-6666</li>
              <li>경기도 안산시 상록구 사1동 1339-6</li>
            </ul>
            <ul class="row">
              <li>군포)자유문고</li>
              <li>031)395-0001</li>
              <li>경기도 군포시 광정동 1123-2</li>
            </ul>
            <ul class="row">
              <li>일산)정글북</li>
              <li>031)922-5000</li>
              <li>경기도 고양시 주엽동 81 뉴서울프라자지하1층</li>
            </ul>
            <ul class="row">
              <li>안양)중앙정보교육</li>
              <li>031)452-7447</li>
              <li>경기도 안양시 동안구 갈산동 1106-5</li>
            </ul>
            <ul class="row">
              <li>의정부)신원문고</li>
              <li>031)826-2130</li>
              <li>경기도 의정부시 의정부3동 168-54</li>
            </ul>
            <ul class="row">
              <li>일산)서울북</li>
              <li>031)916-6500</li>
              <li>경기도 고양시 일산구 덕이동 815-24 제 2동</li>
            </ul>
            <ul class="row">
              <li>일산)종합서적</li>
              <li>031)923-0671</li>
              <li>경기 고양시 일산구 구산동 286-4</li>
            </ul>
            <ul class="row">
              <li>인천)대한서림</li>
              <li>032)762-6337</li>
              <li>인천광역시 중구 인현동 21-3</li>
            </ul>
            <ul class="row">
              <li>인천)청암서적</li>
              <li>032)766-6161</li>
              <li>인천광역시 동구 송림4동 31-43</li>
            </ul>
            <ul class="row">
              <li>인천)인하서적</li>
              <li>032)864-7799</li>
              <li>인천광역시 남구 용현동 253</li>
            </ul>
            <ul class="row">
              <li>인천)현진도서</li>
              <li>032)433-6494</li>
              <li>인천광역시 남동구 구월1동 1165-2</li>
            </ul>
          </div>
        </section>
        <section>
          <h4>충청지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>대전)계룡문고</li>
              <li>042)222-4600</li>
              <li>대전광역시 중구 선화동 226번지 삼성생명B1</li>
            </ul>
            <ul class="row">
              <li>대전)제일전문</li>
              <li>042)531-7696</li>
              <li>대전광역시 중구 대흥동 40-12</li>
            </ul>
            <ul class="row">
              <li>충주)문학사</li>
              <li>043)856-3002</li>
              <li>충청북도 충주시 성서동 285단지</li>
            </ul>
            <ul class="row">
              <li>제천)고시서림</li>
              <li>043)646-5141</li>
              <li>충청북도 제천시 의림동 8-3</li>
            </ul>
            <ul class="row">
              <li>청주)일선문고</li>
              <li>043)253-2360</li>
              <li>충북 청주시 상당구 남문로 2가 48-16</li>
            </ul>
            <ul class="row">
              <li>청주)성안길</li>
              <li>043)256-0202</li>
              <li>충북 청주시 상당구 북문로 1가 123번지</li>
            </ul>
            <ul class="row">
              <li>청주)수험정보은행</li>
              <li>043)255-3422</li>
              <li>충북 청주시 상당구 북문로 2가 57-4번지</li>
            </ul>
            <ul class="row">
              <li>청주)충청대구내</li>
              <li>043)230-2630</li>
              <li>충북 청원군 강내면 월곡리 330 학생회관2층</li>
            </ul>
            <ul class="row">
              <li>청주)충북대구내</li>
              <li>043)261-3108</li>
              <li>충청북도 청주시 흥덕구 개신동 48</li>
            </ul>
            <ul class="row">
              <li>청주)영진서점</li>
              <li>043)273-2409</li>
              <li>충청북도 청주시 흥덕구 사직2동 731-3</li>
            </ul>
          </div>
        </section>
        <section>
          <h4>강원지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>춘천)박문각</li>
              <li>033)253-8192</li>
              <li>강원도 춘천시 효자동 653-12</li>
            </ul>
            <ul class="row">
              <li>강릉)고시서림</li>
              <li>033)647-3650</li>
              <li>강원도 강릉시 성내동 9-3</li>
            </ul>
            <ul class="row">
              <li>동해)천일서점</li>
              <li>033)533-4316</li>
              <li>강원도 동해시 천곡동 801-16</li>
            </ul>
            <ul class="row">
              <li>원주)고시서림</li>
              <li>033)731-5611</li>
              <li>강원도 원주시 학성2동 207-25</li>
            </ul>
            <ul class="row">
              <li>원주)동아서림</li>
              <li>033)743-3754</li>
              <li>강원도 원주시 일산동 52-46</li>
            </ul>
          </div>
        </section>
        <section>
          <h4>영남지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>영주)고시서림</li>
              <li>054)632-1183</li>
              <li>경상북도 영주시 하망동 343-2</li>
            </ul>
            <ul class="row">
              <li>영주)영남서적</li>
              <li>054)634-3920</li>
              <li>경상북도 영주시 하망동 343-2</li>
            </ul>
            <ul class="row">
              <li>대구)전문서적</li>
              <li>053)422-6323</li>
              <li>대구광역시 중구 대봉2동 722-6</li>
            </ul>
            <ul class="row">
              <li>대구)플러스북</li>
              <li>053)424-0130</li>
              <li>대구광역시 중구 대봉2동 720-25</li>
            </ul>
            <ul class="row">
              <li>대구)영남이공대구내</li>
              <li>053)624-3275</li>
              <li>대구광역시 남구 현충로 274 학생회관2층</li>
            </ul>
            <ul class="row">
              <li>구미)춘향당</li>
              <li>054)452-0392</li>
              <li>경북 구미시 송정동 459-9번지</li>
            </ul>
            <ul class="row">
              <li>포항)학원사</li>
              <li>054)284-8250</li>
              <li>경상북도 포항시 북구 남빈동 415-11</li>
            </ul>
            <ul class="row">
              <li>경주)취업정보</li>
              <li>054)743-0905</li>
              <li>경상북도 경주시 동부동 113-12</li>
            </ul>
            <ul class="row">
              <li>울산)처용서림</li>
              <li>052)261-7842</li>
              <li>울산광역시 남구 신정4동 1233-1</li>
            </ul>
            <ul class="row">
              <li>울산)처용닷컴</li>
              <li>052)268-3843</li>
              <li></li>
            </ul>
            <ul class="row">
              <li>울산)울산대구내</li>
              <li>052)247-3389</li>
              <li>울산광역시 남구 무거동 산29번지</li>
            </ul>
            <ul class="row">
              <li>부산)동보서적</li>
              <li>051)803-8003</li>
              <li>부산광역시 부산진구 부전2동 165-5</li>
            </ul>
            <ul class="row">
              <li>부산)영광도서</li>
              <li>051)816-9500</li>
              <li>부산광역시 부산진구 부전동397-55문화으뜸로 20</li>
            </ul>
            <ul class="row">
              <li>부산)종합기술서적</li>
              <li>051)315-2431</li>
              <li>부산광역시 사상구 학장동 272-9</li>
            </ul>
            <ul class="row">
              <li>부산)부산전문서적</li>
              <li>051)517-1011</li>
              <li>부산광역시 사상구 학장동 272-9번지 서적단지 내</li>
            </ul>
            <ul class="row">
              <li>창원)그랜드문고</li>
              <li>055)283-2848</li>
              <li>경상남도 창원시 용호동 73-62</li>
            </ul>
            <ul class="row">
              <li>마산)학문당</li>
              <li>055)264-2925</li>
              <li>경상남도 마산시 창동 63</li>
            </ul>
            <ul class="row">
              <li>진주)상록서점</li>
              <li>055)755-0574</li>
              <li>경상남도 진주시 가좌동 900</li>
            </ul>
          </div>
        </section>
        <section>
          <h4>호남지역 서점안내</h4>
          <div class="table">
            <ul class="row title">
              <li>거래처명</li>
              <li>전화번호</li>
              <li>주소</li>
            </ul>
            <ul class="row">
              <li>광주)검정기술</li>
              <li>062)529-4572</li>
              <li>광주광역시 북구 신안동 134-1</li>
            </ul>
            <ul class="row">
              <li>광주)충장서림</li>
              <li>062)227-1932</li>
              <li>광주광역시 동구 금남로 2가 35번지</li>
            </ul>
            <ul class="row">
              <li>광주)대양서점</li>
              <li>062)223-4060</li>
              <li>광주광역시 동구 서석동 23-7</li>
            </ul>
            <ul class="row">
              <li>광주)중앙서점</li>
              <li>062)225-4901</li>
              <li>광주광역시 북구 풍향동 496-12</li>
            </ul>
            <ul class="row">
              <li>군산)통하라</li>
              <li>063)442-7134</li>
              <li>전라북도 군산시 중앙로1가 15-25</li>
            </ul>
            <ul class="row">
              <li>익산)문화서적</li>
              <li>063)852-2001</li>
              <li>전라북도 전주시 덕진구 진북동 368-1</li>
            </ul>
            <ul class="row">
              <li>전주)문화서적</li>
              <li>063)276-2012</li>
              <li>전북 전주시 덕진구 진북동 368-1</li>
            </ul>
            <ul class="row">
              <li>전주)홍지서림</li>
              <li>063)288-5311</li>
              <li>전라북도 전주시 완산구 경원동 1가 15-1</li>
            </ul>
            <ul class="row">
              <li>전주)전북전문</li>
              <li>063)288-6268</li>
              <li>전라북도 전주시 덕진구 금암1동 471-5</li>
            </ul>
            <ul class="row">
              <li>전주)민중서관</li>
              <li>063)288-2495</li>
              <li>전라북도 전주시 완산구 경원동 1가 76-7</li>
            </ul>
            <ul class="row">
              <li>전주)전북대구내</li>
              <li>063)270-2170</li>
              <li>전라북도 전주시 덕진구 덕진동1가 664-14</li>
            </ul>
            <ul class="row">
              <li>순천)중앙서점</li>
              <li>061)723-8000</li>
              <li>전라남도 순천시 연향동 1329-3</li>
            </ul>
            <ul class="row">
              <li>목포)한솔문고</li>
              <li>061)281-7244</li>
              <li>전라남도 목포시 상동 877-6번지</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Bookstore