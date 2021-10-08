import { useState, useEffect } from 'react';
import api from '../../../_api/backend/index';

export default function InfiniteScroll(page: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [workspaceList, setWorkpaceList] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchWorkspaceListPaging();
  }, [page]);

  const fetchWorkspaceListPaging = () => {
    api
      .getWorkspaceListPaging(page)
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
        console.log('paging error');
        setError(true);
      });
  };

  return { loading, error, workspaceList };
}
