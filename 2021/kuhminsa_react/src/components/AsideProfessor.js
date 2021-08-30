import React from "react";
import { NavLink } from "react-router-dom";

export const AsideProfessor = () => {
  return (
    <aside>
      <h3>교수님 전용</h3>
      <NavLink to="lecture-material">강의자료실</NavLink>
      <NavLink to="sample-books">견본도서요청</NavLink>
    </aside>
  );
};
