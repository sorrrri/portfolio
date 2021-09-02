import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';
import { SearchArea } from '../../../_layout/top-navigator/search-area';
import { ActiveScroll } from '../../../_component/active-scroll';

export function WorkspaceList(props: any) {
  const [isToggleOn, setToggleOn] = useState(false);

  const toggleSearchArea = () => {
    setToggleOn(!isToggleOn);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork toggle={toggleSearchArea} {...props} />,
      })
    );
  });

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <>
      <SearchArea show={isToggleOn} />
      <main className="content list workspace" onScroll={ActiveScroll}>
        <div className="row emergency" onClick={() => onClickItem(1)}>
          <div className="row-title">
            <ul>
              <li className="title">
                <div>카메라 위치 조정 요청 건카메라 위치 조정 요청 건카메라 위치 조정 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
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
              모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
              모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
              모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
              모니터링 중 근처 가로수로 인하여 정확한 모니터링이 불가하오니 조치 부탁드립니다.
            </p>
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
        <div className="row">
          <div className="row-title">
            <ul>
              <li className="title">
                <div>데이터 시각화 서비스 권한 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">홍길동</span>
                <span className="date">2021-08-03 12:42:32</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>데이터 시각화 사용을 위한 권한을 요청 드립니다.</p>
            <ul className="images">
              <li className="image">
                <img
                  src="https://images.unsplash.com/photo-1610819610413-3e42356fc150?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
              </li>
              <li className="image">
                <img
                  src="https://images.unsplash.com/photo-1596311087104-86dba6be2aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHN0cmVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="status">
            <div className="attach">
              <i className="fal fa-paperclip" />
            </div>
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
        <div className="row">
          <div className="row-title">
            <ul>
              <li className="title">
                <div>데이터 시각화 서비스 권한 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">홍길동</span>
                <span className="date">2021-08-03 12:42:32</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>데이터 시각화 사용을 위한 권한을 요청 드립니다.</p>
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
        <div className="row">
          <div className="row-title">
            <ul>
              <li className="title">
                <div>데이터 시각화 서비스 권한 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">홍길동</span>
                <span className="date">2021-08-03 12:42:32</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>데이터 시각화 사용을 위한 권한을 요청 드립니다.</p>
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
        <div className="row">
          <div className="row-title">
            <ul>
              <li className="title">
                <div>데이터 시각화 서비스 권한 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">홍길동</span>
                <span className="date">2021-08-03 12:42:32</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>데이터 시각화 사용을 위한 권한을 요청 드립니다.</p>
            <ul className="documents">
              <li className="document">
                <i className="fad fa-file-alt" />
                <span>권한 변경 요청서.xlsx</span>
              </li>
            </ul>
          </div>
          <div className="status">
            <div className="attach">
              <i className="fal fa-paperclip" />
            </div>
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
        <div className="row emergency">
          <div className="row-title">
            <ul>
              <li className="title">
                <div>데이터 시각화 서비스 권한 요청 건</div>
                <div className="tags">
                  <span className="tag bg-red">긴급</span>
                  <span className="tag bg-blue">요청</span>
                </div>
              </li>
              <li className="created">
                <i className="fad fa-user" />
                <span className="writer">홍길동</span>
                <span className="date">2021-08-03 12:42:32</span>
              </li>
            </ul>
          </div>
          <div className="details">
            <p>데이터 시각화 사용을 위한 권한을 요청 드립니다.</p>
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
      </main>
    </>
  );
}
