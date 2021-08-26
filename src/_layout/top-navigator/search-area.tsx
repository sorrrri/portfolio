/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const SearchArea = () => {
  return (
    <div className="row search">
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
      <div className="filters filters-workspace">
        <button type="button">
          <input type="radio" id="input-request" name="filter-search" defaultChecked />
          <label htmlFor="input-request">
            <span>요청</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="input-undertake" name="filter-search" />
          <label htmlFor="input-undertake">
            <span>진행</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="input-done" name="filter-search" />
          <label htmlFor="input-done">
            <span>완료</span>
          </label>
        </button>
      </div>
      <div className="filters filters-equipments">
        <button type="button">
          <input type="radio" id="input-address" name="filter-search-equipments" defaultChecked />
          <label htmlFor="input-address">
            <span>주소 검색</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="input-cctv" name="filter-search-equipments" />
          <label htmlFor="input-cctv">
            <span>CCTV 검색</span>
          </label>
        </button>
      </div>
    </div>
  );
};
