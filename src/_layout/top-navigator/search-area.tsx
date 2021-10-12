/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

/* eslint-disable react/require-default-props */
export const SearchArea = (props: {
  children?: any;
  show?: any;
  close?: any;
  placeHolder?: any;
  onChange?: (keyword: string) => void;
}) => {
  const { show, close, placeHolder } = props;

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (props.onChange) {
      props.onChange(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchValue('');
  }, [show]);

  return (
    <div className={`search-area ${show ? 'active' : ''}`}>
      <div className="input">
        <input
          type="search"
          placeholder={placeHolder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <i className="fad fa-search" />
        <button className="btn-close" type="button" onClick={close}>
          <i className="fad fa-times" />
        </button>
      </div>
      <div className="filters">{props.children}</div>
    </div>
  );
};
