import { useState, useEffect } from 'react';
import api from '../_api/backend/index';

export default function UseFetch(page: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [workList, setWorkList] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchWorkspaceListPaging();
  }, [page]);

  const fetchWorkspaceListPaging = () => {
    api
      .getWorkspaceListPaging(page)
      .then((payload: any) => {
        const { code, response } = payload;
        if (code === 200) {
          setWorkList((prevList: any) => {
            return [...prevList, response];
          });
          setHasMore(response.results.length > 0);
          setLoading(false);
        }
      })
      .catch(() => {
        console.log('paging error');
        setError(true);
      });
  };

  return { loading, error, workList, hasMore };
}
