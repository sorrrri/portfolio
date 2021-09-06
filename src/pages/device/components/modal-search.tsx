/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/require-default-props
export const ModalSearch = (props: any) => {
  const { show, close } = props;

  return (
    <>
      <div className={`overlay ${show ? 'active' : ''}`} onClick={close} />
      <div className={`modal modal-search ${show ? 'active' : ''}`}>
        <div className="modal-header">
          <div className="title">
            <h3>장비 검색</h3>
            <button className="btn-close" onClick={close} type="button">
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
    </>
  );
};
