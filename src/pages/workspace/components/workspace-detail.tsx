/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';

export function WorkspaceDetail(props: any) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(
      showHeader({
        title: `Workspace #${id}`,
        leftContextType: 'back',
        rightContext: () => null,
      })
    );
  }, [id]);

  return (
    <main className="content details workspace">
      <div className="row emergency">
        <div className="row-title">
          <div className="tags">
            <span className="tag bg-red">긴급</span>
            <span className="tag bg-blue">요청</span>
          </div>
          <ul>
            <li className="title">
              <div>카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건</div>
            </li>
            <li className="created">
              <i className="fad fa-user" />
              <span className="writer">홍길동</span>
              <span className="date">2021-08-03 12:42:32</span>
            </li>
          </ul>
        </div>
        <div className="details">
          <p>
            모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다. 아래
            관련 자료 첨부 하오니, 확인 후 빠른 조치 부탁드립니다. 주정차 단속 관련 장비 이므로 빠른
            처리가 필요합니다. 감사합니다.
          </p>
          <div className="images">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1610819610413-3e42356fc150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1596311087104-86dba6be2aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0cmVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="status">
          <div className="attach" />
          <ul>
            <li>
              <i className="fad fa-comment-alt-lines" />
              <span className="comment">3</span>
            </li>
            <li>
              <i className="fad fa-comment-alt-check" />
              <span className="read">5</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row comments">
        <div className="new add">
          <div className="title">
            <i className="fad fa-comment-alt-edit" />
            <span>댓글작성</span>
          </div>
          <div className="filters">
            <button type="button">
              <label className="bg-orange" htmlFor="input-request-comment">
                <span>요청</span>
              </label>
              <input type="radio" id="input-request-comment" name="filter-type" defaultChecked />
            </button>
            <button type="button">
              <label className="bg-blue" htmlFor="input-undertake-comment">
                <span>진행</span>
              </label>
              <input type="radio" id="input-undertake-comment" name="filter-type" />
            </button>
            <button type="button">
              <label className="bg-green" htmlFor="input-done-comment">
                <span>완료</span>
              </label>
              <input type="radio" id="input-done-comment" name="filter-type" />
            </button>
          </div>
          <textarea name="" id="" />
          <div className="comment-footer">
            <div className="buttons attach">
              <button type="button">
                <label htmlFor="input-attach">
                  <i className="fad fa-cloud-upload" />
                </label>
                <input type="file" id="input-attach" />
              </button>
            </div>
            <div className="buttons">
              <button className="btn-cancel" type="button">
                취소
              </button>
              <button className="btn-submit" type="button">
                등록
              </button>
            </div>
          </div>
        </div>
        <div className="other-comment">
          <ul className="information">
            <li className="tags">
              <span className="tag request" />
            </li>
            <li className="created">
              <i className="fad fa-user" />
              <span className="writer">홍길동</span>
              <span className="date">2021-08-03 12:42:32</span>
            </li>
          </ul>
          <div>내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.</div>
          <div className="status">
            <i className="fad fa-comment-alt-check" />
            <span>박보검</span>
          </div>
        </div>
        <div className="other-comment">
          <ul className="information">
            <li className="tags">
              <span className="tag undertake" />
            </li>
            <li className="created">
              <i className="fad fa-user" />
              <span className="writer">홍길동</span>
              <span className="date">2021-08-03 12:42:32</span>
            </li>
          </ul>
          <div>내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.</div>
          <div className="status">
            <i className="fad fa-comment-alt-check" />
            <span>박보검, 정우성, 전지현, 이정재, 이영애, 손예진, 현빈, 고길동, 둘리, 또치</span>
          </div>
        </div>
        <div className="other-comment">
          <ul className="information">
            <li className="tags">
              <span className="tag done" />
            </li>
            <li className="created">
              <i className="fad fa-user" />
              <span className="writer">홍길동</span>
              <span className="date">2021-08-03 12:42:32</span>
            </li>
          </ul>
          <div>내용 확인 했습니다. 최대한 빨리 조치 가능 하도록 하겠습니다.</div>
          <div className="status">
            <i className="fad fa-comment-alt-check" />
            <span>박보검, 정우성, 전지현, 이정재, 이영애, 손예진, 현빈, 고길동, 둘리, 또치</span>
          </div>
        </div>
      </div>
    </main>
  );
}
