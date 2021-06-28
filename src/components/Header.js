import React from "react"

export const Header = () => {

  return (
    <header>
      <nav className="global-menu">
        <a href="login.html">로그인</a>
        <a href="signup.html">회원가입</a>
        <a href="notice.html">고객센터</a>
        <a href="./admin/main.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>
        </a>
      </nav>
      <div className="wrapper">
        <a href="index.html" className="logo"></a>
        <div className="search">
          <input name="" type="search" placeholder="도서명을 입력하세요." />
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <div className="quick-links">
          <a className="shopping-bag" href="shoppingbag.html">
            <span>장바구니</span>
          </a>
          <a className="shipping" href="order_list.html">
            <span>주문배송조회</span>
          </a>
          <a className="mypage" href="mypage.html">
            <span>마이페이지</span>
          </a>
        </div>
      </div>
      <nav className="categories">
        <div className="wrapper">
          <a href="#">전문교재</a>
          <a href="#">자격수험서</a>
          <a href="#">컴퓨터</a>
          <a href="#">단행본</a>
        </div>
        <div className="sub wrapper">
          <ul>
            <li>
              <a href="#">피부계열</a>
            </li>
            <li>
              <a href="#">헤어계열</a>
            </li>
            <li>
              <a href="#">메이크업계열</a>
            </li>
            <li>
              <a href="#">네일아트계열</a>
            </li>
            <li>
              <a href="#">보건계열</a>
            </li>
            <li>
              <a href="#">공학계열</a>
            </li>
            <li>
              <a href="#">영상계열</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">기능사</a>
            </li>
            <li>
              <a href="#">기사/산업기사</a>
            </li>
            <li>
              <a href="#">기술사/기능장</a>
            </li>
            <li>
              <a href="#">그 외 자격증</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">프로그래밍</a>
            </li>
            <li>
              <a href="#">그래픽/영상</a>
            </li>
            <li>
              <a href="#">e-비즈니스</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">단행본</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}