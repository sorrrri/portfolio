import { useState, useEffect } from 'react';
import api from '../../../_api/backend/index';

export default function WorkspaceListAPI(keyword: string, page: any, errorClear: any) {
  const [loading, setLoading] = useState(true);
  const [pagingError, setPagingError] = useState(false);
  const [workspaceList, setWorkpaceList] = useState<any>([]);
  const [workspaceListCheck, setWorkspaceListCheck] = useState(true);

  useEffect(() => {
    setWorkpaceList([]);
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    setPagingError(false);
    fetchWorkspaceListAPI();
  }, [keyword, page]);

  useEffect(() => {
    setPagingError(false);
  }, [errorClear]);

  const fetchWorkspaceListAPI = () => {
    api
      .getWorkspaceListAPI(keyword, page)
      .then((payload: any) => {
        if (payload.response.results !== null) {
          const { code, response } = payload;
          if (code === 200) {
            setWorkpaceList((prevList: any) => {
              return [...prevList, response];
            });
            setLoading(false);
          }
        } else {
          setWorkspaceListCheck(false);
        }
      })
      .catch(() => {
        console.log('PAGING ERROR');
        setPagingError(true);
      });
  };

  return { loading, workspaceList, pagingError, workspaceListCheck };
}
