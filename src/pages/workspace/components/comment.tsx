import React from 'react';

export const Comment = (props: any) => {
  const { writer, date, read, request, undertake, done } = props;

  return (
    <div className="other-comment">
      <ul className="information">
        <li className="tags">
          <span
            className={`tag ${request ? 'request' : ''} ${undertake ? 'undertake' : ''} ${
              done ? 'done' : ''
            }`}
          />
        </li>
        <li className="created">
          <i className="fad fa-user" />
          <span className="writer">{writer}</span>
          <span className="date">{date}</span>
        </li>
      </ul>
      <div>{props.children}</div>
      <div className="status">
        <i className="fad fa-comment-alt-check" />
        <span>{read}</span>
      </div>
    </div>
  );
};
