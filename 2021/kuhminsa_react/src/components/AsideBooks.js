import React from "react";
import { NavLink } from "react-router-dom";

export const AsideBooks = () => {
  return (
    <aside>
      <h3>도서목록</h3>
      <div>
        <h4>전문교재</h4>
        <NavLink to="/list" activeClassName="active">피부계열</NavLink>
        <NavLink to="/list/hair" activeClassName="active">헤어계열</NavLink>
        <NavLink to="/list/makeup" activeClassName="active">메이크업계열</NavLink>
        <NavLink to="/list/nailart" activeClassName="active">네일아트계열</NavLink>
        <NavLink to="/list/health" activeClassName="active">보건계열</NavLink>
        <NavLink to="/list/engineering" activeClassName="active">공학계열</NavLink>
        <NavLink to="/list/video" activeClassName="active">영상계열</NavLink>
      </div>
      <div>
        <h4>자격수험서</h4>
        <NavLink to="/list/technician" activeClassName="active">기능사</NavLink>
        <NavLink to="/list/industrial-engineer" activeClassName="active">기사/산업기사</NavLink>
        <NavLink to="/list/master-technician" activeClassName="active">기술사/기능장</NavLink>
        <NavLink to="/list/other-qualifications" activeClassName="active">그 외 자격증</NavLink>
      </div>
      <div>
        <h4>컴퓨터</h4>
        <NavLink to="/list/programming" activeClassName="active">프로그래밍</NavLink>
        <NavLink to="/list/graphics" activeClassName="active">그래픽/영상</NavLink>
        <NavLink to="/list/e-business" activeClassName="active">e-비즈니스</NavLink>
      </div>
      <div>
        <h4>단행본</h4>
        <NavLink to="/list/paperback" activeClassName="active">단행본</NavLink>
      </div>
    </aside>
  );
};
