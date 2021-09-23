import React from 'react';

export const Row = (props: any) => {
  const { title, goDetail } = props;

  return (
    <div className="row" onClick={goDetail}>
      <div className="tags">
        <span className="tag">TMS</span>
        <span className="tag">CCTV</span>
        <span className="tag">주정차 단속</span>
      </div>
      <div>{title}</div>
    </div>
  );
};
