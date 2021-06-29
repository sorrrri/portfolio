import React from "react";
import { NavLink } from "react-router-dom";

export const AsideAbout = () => {
  return (
    <aside>
      <h3>회사소개</h3>
      <NavLink to="/about" activeClassName="active">회사소개</NavLink>
      <NavLink to="/policy" activeClassName="active">이용약관</NavLink>
      <NavLink to="/privacy" activeClassName="active">개인정보취급방침</NavLink>
    </aside>
  );
};
