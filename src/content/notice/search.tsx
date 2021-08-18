/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 프로퍼티타입 지정
type SearchProps = {
  value?: any;
  onChange?: (event: any) => void;
  onClick?: (event: any) => void;
};

const Search = React.forwardRef((props: SearchProps, ref) => {
  const { value, onChange, onClick } = props;

  const [keywordsValue, setKeywords] = useState<any>(value);

  const handleChange = (event: any) => {
    console.log('target value', event.target.value);

    if (onChange) {
      onChange(event);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <div className="modal modal-search">
        <div className="modal-header">
          <div className="title">
            <h3>상세 검색</h3>
            <button className="close" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-content">
          <section className="keywords">
            <span>키워드</span>
            <input
              type="search"
              placeholder="키워드를 입력하세요"
              value={keywordsValue}
              onChange={(event: any) => {
                setKeywords(event.target.value);
              }}
            />
          </section>
          <section>
            <span>조회기간</span>
            <div className="filters">
              <button type="button">
                <input
                  type="radio"
                  id="input-a-month"
                  name="filter-term"
                  // onChange={handleCkeckRadioButton}
                />
                <label htmlFor="input-a-month">
                  <span>1개월</span>
                </label>
              </button>
              {/* <button type="button">
                <input type="radio" id="input-a-month" name="filter-term" />
                <label htmlFor="input-a-month">
                  <span>1개월</span>
                </label>
              </button> */}
              <button type="button">
                <input type="radio" id="input-3-months" name="filter-term" />
                <label htmlFor="input-3-months">
                  <span>3개월</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-6-months" name="filter-term" />
                <label htmlFor="input-6-months">
                  <span>6개월</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-a-year" name="filter-term" />
                <label htmlFor="input-a-year">
                  <span>1년</span>
                </label>
              </button>
            </div>
            <div className="filters calendar">
              <div className="input">
                <input type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </div>
              <div className="input">
                <input type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </div>
            </div>
          </section>
          <section>
            <span>공지유형</span>
            <div className="filters">
              <button type="button">
                <input type="radio" id="inputAll" name="filter-type" />
                <label htmlFor="inputAll">
                  <span>전체공지</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="inputImportant" name="filter-type" />
                <label htmlFor="inputImportant">
                  <span>중요게시물</span>
                </label>
              </button>
            </div>
          </section>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel close" type="button">
            취소
          </button>
          <button
            className="btn-search"
            type="submit"
            // onChange={handleChange}
            value={keywordsValue}
            onClick={handleChange}
          >
            검색
          </button>
        </div>
      </div>
    </>
  );
});

Search.propTypes = {
  value: PropTypes.any,
  // eslint-disable-next-line react/require-default-props
  onChange: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};

Search.defaultProps = { value: '' };
export default Search;
