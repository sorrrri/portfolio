import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../_store/slice/header-option';
import Search from './search';

export function Notice() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showHeader({
        title: '공지사항',
        type: 'menu&search',
        onClickSearch,
      })
    );
    const event = new CustomEvent('DOMContentLoaded');
    document.dispatchEvent(event);
  }, []);

  const [formValues, setFormValues] = useState<any>();

  const onClickSearch = () => {
    console.log('onClickSearch from complaint');
  };

  const onChange = (event: any) => {
    // console.log(event.target.value);
    const search = notices.filter((item) => {
      return item.title.includes(event.target.value) || item.content.includes(event.target.value);
    });
    console.log('검색결과:', search);
    setFormValues(event.target.value);
  };

  const notices = [
    {
      id: 0,
      content: '내용이 들어가요',
      title: '제목이 들어가요',
      date: '2021-05-26 14:26:18',
      isImportent: true,
      target: '전체',
    },
    {
      id: 1,
      content: '테스트 내용',
      title: '테스트',
      date: '2021-05-26 14:26:18',
      isImportent: false,
      target: '관리자',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis sapiente cumvoluptas unde sed perferendis, accusantium suscipit nostrum quidem!',
      title: '신분당선 강동 연장 구간 개통 안내 (05/26)',
      date: '2021-05-26 14:26:18',
      isImportent: true,
      target: '전체',
    },
  ];

  return (
    <>
      <div>키워드 :{formValues}</div>
      <main className="content list notice">
        {notices.map((notice) => (
          <div className="row" key={notice.id}>
            <div className="row-title">
              <ul>
                <li className="tags">
                  <span className="tag bg-blue">{notice.target}</span>
                  {notice.isImportent && <span className="tag bg-red">중요</span>}
                </li>
                <li className="title">{notice.title}</li>
                <li className="date">{notice.date}</li>
              </ul>
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              </svg>
            </div>
            <div className="details">{notice.content}</div>
          </div>
        ))}
      </main>
      <Search onClick={onChange} />
    </>
  );
}
