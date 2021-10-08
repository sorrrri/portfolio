import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../../../_api/backend/index';

export default function WorkspaceListAPI(keyword: string, page: any, errorClear: any) {
  const [loading, setLoading] = useState(true);
  const [pagingError, setPagingError] = useState(false);
  const [workspaceList, setWorkpaceList] = useState<any>([]);

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
    const cancel = new axios.CancelToken((c) => {
      return c;
    });
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
        }
      })
      .catch(() => {
        console.log('PAGING ERROR');
        setPagingError(true);
      });
    console.log(cancel);
  };

  return { loading, workspaceList, pagingError };
}
