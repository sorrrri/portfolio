import React from "react";
import { Link } from "react-router-dom";
import { AsideAbout } from "../components/AsideAbout"
import Iframe from "react-iframe"

const About = () => (
  <main className="sub about wrapper">
    <AsideAbout />
    <div className="content">
      <div className="breadscrumb">
        <a href="#">Home</a>
        <a href="#">회사소개</a>
        <a href="#">회사소개</a>
      </div>
      <div className="title">
        <h2>회사소개</h2>
        <p>
          도서출판 구민사의 홈페이지를 방문해 주셔서 감사합니다. 구민사는 오랫동안
          사랑받아온 신기술서적 전문출판사입니다.
        </p>
      </div>
      <section className="greetings">
        <h3>안녕하세요. 구민사 홈페이지를 방문해 주셔서 감사합니다.</h3>
        <p>
          1983년 창설된 도서출판 구민사는 21세기를 제2의 도약의 시기로 정하고
          과학기술분야뿐만 아니라 컴퓨터 서적까지 총망라하여 발간합니다.
        </p>
        <p>
          20여 년 준비된 경험을 토대로 신기술 서적을 출간하는 데 최선을 다할 것을
          약속드립니다.
        </p>
        <p>
          앞으로도 시대적인 변화를 먼저 읽어내고 미래에 필요한 지식과 정보를 한발
          앞서 제공하겠다는 기본이념을 잊지 않고 독자들의 의견에 귀 기울이면서
          오랫동안 사랑받는 책을 만드는 일에 최선의 노력을 기울여 나가겠습니다.
        </p>
        <p>감사합니다.</p>
        <strong>대표이사 조규백</strong>
      </section>
      <section>
        <h3>찾아오시는 길</h3>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6328.961506126397!2d126.88987284893992!3d37.520163118829814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2791859f29326f72!2sTriplex!5e0!3m2!1sko!2skr!4v1621571393794!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
        <address>주소: 우)07293. 서울특별시 영등포구 문래북로 116, 604호~605호(문래동3가, 트리플렉스). 도서출판 구민사.</address>
        <ul>
          <li>전화번호: 02-701-7421, 7422</li>
          <li>팩스번호: 02-3273-9642</li>
          <li>이메일: kuhminsa@kuhminsa.co.kr</li>
        </ul>
      </section>
    </div>
  </main>
);

export default About;
