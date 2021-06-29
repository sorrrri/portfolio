import React from "react";
import { NavLink } from "react-router-dom";

export const AsideCS = () => {
  return (
    <aside>
      <h3>고객센터</h3>
      <NavLink to="/notice" activeClassName="active">공지사항</NavLink>
      <NavLink to="/errata" activeClassName="active">정오표</NavLink>
      <NavLink to="/downloads" activeClassName="active">자료실</NavLink>
      <NavLink to="/books-all" activeClassName="active">도서목록 전체보기</NavLink>
      <div>
        <h4>정보안내</h4>
        <NavLink to="/bookstore" activeClassName="active">서점안내</NavLink>
        <NavLink to="/academy" activeClassName="active">학원안내</NavLink>
        <NavLink to="/returns" activeClassName="active">반품/교환안내</NavLink>
      </div>
      <div>
        <h4>요청하기</h4>
        <NavLink to="/qna" activeClassName="active">질의응답</NavLink>
        <NavLink to="/publish" activeClassName="active">출판문의</NavLink>
        <NavLink to="/group-buying" activeClassName="active">공동구매</NavLink>
      </div>
    </aside>
  );
};
