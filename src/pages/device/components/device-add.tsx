/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../../_component/modal-confirm';
import { ModalDone } from '../../../_component/modal-done';
import { showHeader } from '../../../_store/slice/header-option';

export function DeviceAdd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장애 접수',
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main className="content details add">
        <div className="inputs">
          <div className="input title">
            <span>작업명</span>
            <input type="text" placeholder="작업명을 입력하세요." />
          </div>
          <div className="input title">
            <span>장비명</span>
            <input
              className="input-search"
              type="text"
              readOnly
              placeholder="장비명을 검색해주세요."
            />
          </div>
          <div className="input">
            <span>장애유형</span>
            <div className="filters">
              <button type="button">
                <input type="radio" id="input-hardware" name="filter-type" defaultChecked />
                <label htmlFor="input-hardware">
                  <span>하드웨어</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-network" name="filter-type" />
                <label htmlFor="input-network">
                  <span>네트워크</span>
                </label>
              </button>
              <button type="button">
                <input type="radio" id="input-etc" name="filter-type" />
                <label htmlFor="input-etc">
                  <span>기타</span>
                </label>
              </button>
            </div>
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
        <button className="btn-main" onClick={openModal} type="button">
          장애 접수 등록
        </button>
      </div>
      <div className="modal modal-search">
        <div className="modal-header">
          <div className="title">
            <h3>장비 검색</h3>
            <button className="btn-close" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
          <section className="search">
            <input type="search" placeholder="예) 삼성동 25, 독립기념관, 반포대로 58" />
            <button className="btn-search" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
                <path
                  d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                  style={{ fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px' }}
                />
                <line
                  x1="338.29"
                  y1="338.29"
                  x2="448"
                  y2="448"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: '32px',
                  }}
                />
              </svg>
            </button>
          </section>
          <section className="filters">
            <button type="button">
              <input type="radio" id="input-a-month" name="filter-term" defaultChecked />
              <label htmlFor="input-a-month">
                <span>주소 검색</span>
              </label>
            </button>
            <button type="button">
              <input type="radio" id="input-3-months" name="filter-term" />
              <label htmlFor="input-3-months">
                <span>CCTV 검색</span>
              </label>
            </button>
          </section>
        </div>
        <div className="modal-content">
          <section className="result">
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
            <div className="row">
              <div className="tags">
                <span className="tag bg-blue">TMS</span>
                <span className="tag bg-blue">CCTV</span>
                <span className="tag bg-blue">주정차 단속</span>
              </div>
              <div>2019_P_신정호_고정15_자기망</div>
            </div>
          </section>
          <section className="no-result">검색 내역이 없습니다.</section>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal} header="장애 접수">
        장애 접수를 등록하시겠습니까?
      </Modal>
      <ModalDone open={modalOpen} close={closeModal}>
        장애 접수가 등록 되었습니다.
      </ModalDone>
    </>
  );
}
