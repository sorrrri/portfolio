import React from "react";
import { NavLink } from "react-router-dom";

export const AsideAccounts = () => {
  return (
    <aside>
      <h3>회원정보</h3>
      <NavLink to="/shopping-bag">장바구니</NavLink>
      <NavLink to="/order-list">주문배송조회</NavLink>
      <NavLink to="/mypage">마이페이지</NavLink>
    </aside>
  );
};
