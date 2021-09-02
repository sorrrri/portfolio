/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

/* eslint-disable react/require-default-props */
export const SearchArea = (props: { children?: any; show?: any }) => {
  const { show } = props;
  return (
    <div className={`search-area ${show ? 'active' : ''}`}>
      <div className="input">
        <input type="search" placeholder="작업명, 작성자를 입력하세요." />
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
          <title>ionicons-v5-f</title>
          <path
            d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
            style={{
              fill: 'none',
              stroke: 'white',
              strokeMiterlimit: 10,
              strokeWidth: '32px',
            }}
          />
          <line
            x1="338.29"
            y1="338.29"
            x2="448"
            y2="448"
            style={{
              fill: 'none',
              stroke: 'white',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '32px',
            }}
          />
        </svg>
      </div>
      <div className="filters">{props.children}</div>
    </div>
  );
};
