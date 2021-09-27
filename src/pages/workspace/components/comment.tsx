import React from 'react';

export const Comment = (props: any) => {
  const { writer, date, read, state } = props;

  const filterstate = (value: any) => {
    switch (value) {
      case '요청':
        return <span className="tag request" />;
      case '진행':
        return <span className="tag undertake" />;
      case '완료':
        return <span className="tag done" />;
      default:
        return <span className="" />;
    }
  };

  return (
    <div className="other-comment">
      <ul className="information">
        <li className="tags">[api확인필요]{filterstate(state)}</li>
        <li className="created">
          <i className="fad fa-user" />
          <span className="writer">{writer}</span>
          <span className="date">{date}</span>
        </li>
      </ul>
      <div>{props.children}</div>
      <div className="status">
        <i className="fad fa-comment-alt-check" />
        <span>[api확인필요]{read}</span>
      </div>
    </div>
  );
};
