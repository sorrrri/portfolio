/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../_component/modal-confirm';
import { ModalDone } from '../../_component/modal-done';
import { showHeader } from '../../_store/slice/header-option';

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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const showSecondModal = () => {
    setIsOpen2(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  const isCloseAll = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };

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
        <button className="btn-main" onClick={showModal} type="button">
          업무 요청 등록
        </button>
      </div>
      <Modal show={isOpen} confirmed={showSecondModal} closeModal={isClose} title="업무 요청">
        업무 요청을 등록하시겠습니까?
      </Modal>
      <ModalDone show={isOpen2} closeModal={isCloseAll}>
        업무 요청이 등록 되었습니다.
      </ModalDone>
    </>
  );
}
