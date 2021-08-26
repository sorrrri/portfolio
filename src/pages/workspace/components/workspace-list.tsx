import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';

export function WorkspaceList(props: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showHeader({
        title: 'Workspace',
        leftContextType: 'menu',
        rightContext: () => <AddSearchWork {...props} />,
      })
    );
  });

  const onClickAddWork = () => {
    alert('on click add work');
  };

  const onClickAddFault = () => {
    alert('on click add fault');
  };

  const onClickSearch = () => {
    alert('on click search');
  };

  const onClickItem = (workId: number) => {
    const { history } = props;
    history.push(`/workspace/${workId}`);
  };

  return (
    <main className="content list workspace">
      <div className="row emergency">
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

      {/* 기존에 있던 내용 */}
      <div>
        <h1>this is workspace list</h1>
        <ul>
          <li onClick={() => onClickItem(1)}>item1</li>
          <li onClick={() => onClickItem(2)}>item2</li>
          <li onClick={() => onClickItem(3)}>item3</li>
        </ul>
      </div>
    </main>
  );
}
