import React from 'react';

export const Row = (props: any) => {
  const {
    item,
    comment,
    read,
    title,
    writer,
    date,
    importance,
    worktype,
    rowtype,
    images,
    documents,
  } = props;

  const switchimportance = (value: any) => {
    switch (value) {
      case '긴급':
        return <span className="tag bg-red">긴급</span>;
      case '높음':
        return <span className="tag bg-orange">높음</span>;
      case '보통':
        return <span className="tag bg-blue">보통</span>;
      case '낮음':
        return <span className="tag bg-green">낮음</span>;
      default:
        return <span className="">...</span>;
    }
  };

  const switchworktype = (value: any) => {
    switch (value) {
      case '요청':
        return <span className="tag bg-blue">요청</span>;
      case '장애':
        return <span className="tag bg-green">장애</span>;
      default:
        return <span className="">...</span>;
    }
  };

  return (
    <div className={`row ${rowtype}`} onClick={item}>
      <div className="row-title">
        <ul>
          <li className="title">
            <div>{title}</div>
            <div className="tags">
              {/* <span className="tag imortance" /> */}
              {switchworktype(worktype)}
              {switchimportance(importance)}
            </div>
          </li>
          <li className="created">
            <i className="fad fa-user" />
            <span className="writer">{writer}</span>
            <span className="date">{date}</span>
          </li>
        </ul>
      </div>
      <div className="details">
        <p>{props.children}</p>
        {images ? (
          <ul className="images">
            <li className="image">
              <img
                src="https://images.unsplash.com/photo-1610819610413-3e42356fc150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </li>
            <li className="image">
              <img
                src="https://images.unsplash.com/photo-1596311087104-86dba6be2aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0cmVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </li>
          </ul>
        ) : (
          ''
        )}
        {documents ? (
          <ul className="documents">
            <li className="document">
              <i className="fad fa-file-alt" />
              <span>권한 변경 요청서.xlsx</span>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
      <div className="status">
        <div className="attach">
          {images || documents ? <i className="fal fa-paperclip" /> : ''}
        </div>
        <ul>
          <li>
            <i className="fad fa-comment-alt-lines" />
            <span className="comment">{comment}</span>
          </li>
          <li>
            <i className="fad fa-comment-alt-check" />
            <span className="read">{read}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
