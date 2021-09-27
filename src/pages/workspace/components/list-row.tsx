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
    imagsrc,
    documents,
    documentssrc,
  } = props;

  const switchimportance = (value: string) => {
    switch (value) {
      case 'EMERGENCY':
        return <span className="tag bg-red">긴급</span>;
      case 'HIGH':
        return <span className="tag bg-orange">높음</span>;
      case 'USUALLY':
        return <span className="tag bg-blue">보통</span>;
      case 'LOW':
        return <span className="tag bg-green">낮음</span>;
      default:
        return <span className="" />;
    }
  };

  return (
    <div className={`row ${rowtype === 'disability' ? 'obstruction' : ''}`} onClick={item}>
      <div className="row-title">
        <ul>
          <li className="title">
            <div>{title}</div>
            <div className="tags">
              {worktype === 'work' ? (
                <span className="tag border-blue">요청</span>
              ) : (
                <span className="tag border-indianred">장애</span>
              )}
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
        {images && images === 'true' ? (
          <ul className="images">
            <li className="image">
              <img src={imagsrc} alt="" />
            </li>
          </ul>
        ) : (
          ''
        )}
        {documents && documents === 'true' ? (
          <ul className="documents">
            <li className="document">
              <i className="fad fa-file-alt" />
              <span>{documentssrc}</span>
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
