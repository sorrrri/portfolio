import React from "react";
import { Link } from "react-router-dom";
import { AsideBooks } from "../components/AsideBooks";

const List = () => {

  return (
    <main className="sub wrapper">
      <AsideBooks />
      <div className="content">
        <div className="breadscrumb">
          <Link to="#">Home</Link>
          <Link to="#">전문교재</Link>
          <Link to="#">피부계열</Link>
        </div>
        <div className="title">
          <h2>도서 목록</h2>
          <p>구민사는 오랫동안 사랑을 받아온 신기술 서적 전문 출판사입니다.</p>
        </div>
        <div className="items">
          <Link to="details.html">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
          <Link to="#">
            <img src={require("../assets/images/thumbnails/01.jpg")} alt="샘플이미지" />
            <ul>
              <li>뷰티 트렌드</li>
              <li>홍수남 권오혁</li>
              <li>16,000원</li>
            </ul>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default List