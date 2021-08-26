/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';

export function WorkspaceAdd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '업무 요청',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  });

  return (
    <>
      <main className="content details add workspace">
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input type="text" placeholder="작업명을 입력하세요." />
          </div>
          <div className="input">
            <span>중요도</span>
            <div className="filters">
              <button type="button">
                <input type="radio" id="input-emergency" name="filter-importance" defaultChecked />
                <label htmlFor="input-emergency" className="bg-red">
                  <span>긴급</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-high" name="filter-importance" />
                <label htmlFor="input-high" className="bg-orange">
                  <span>높음</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-normal" name="filter-importance" />
                <label htmlFor="input-normal" className="bg-blue">
                  <span>보통</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-low" name="filter-importance" />
                <label htmlFor="input-low" className="bg-green">
                  <span>낮음</span>
                </label>
              </button>
            </div>
          </div>
          <div className="input send-to">
            <span>받는사람</span>
            <input type="text" />
          </div>
          <textarea name="" id="" />
          <div className="buttons attach">
            <button type="button">
              <input type="file" id="input-attach" />
              <label htmlFor="input-attach">
                <i className="fad fa-cloud-upload" />
              </label>
            </button>
          </div>
        </div>
      </main>
      <div className="buttons">
        <button className="btn-main" type="button">
          업무 요청 등록
        </button>
      </div>
      <div className="modal modal-confirm">
        <div className="modal-header">
          <div className="title">
            <h3>업무 요청</h3>
            <button className="btn-close" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="modal-content">업무 요청을 등록 하시겠습니까?</div>
        <div className="modal-footer buttons">
          <button className="btn-cancel" type="button">
            아니오
          </button>
          <button className="btn-submit" type="button">
            예
          </button>
        </div>
      </div>
      <div className="modal modal-done">
        <div className="modal-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
            <path
              d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
              style={{
                fill: 'none',
                stroke: 'slategray',
                strokeMiterlimit: 10,
                strokeWidth: '32px',
              }}
            />
            <polyline
              points="352 176 217.6 336 160 272"
              style={{
                fill: 'none',
                stroke: 'slategray',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px',
              }}
            />
          </svg>
          <p>업무 요청이 등록 되었습니다.</p>
        </div>
        <div className="modal-footer buttons">
          <button className="btn-cancel" type="button">
            확인
          </button>
        </div>
      </div>
    </>
  );
}
