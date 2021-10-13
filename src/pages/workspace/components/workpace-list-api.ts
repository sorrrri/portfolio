import { useState, useEffect } from 'react';
import api from '../../../_api/backend/index';

export default function WorkspaceListAPI(
  searKeyPress: string,
  page: any,
  errorClear: any,
  keyUpReset: any
) {
  const [loading, setLoading] = useState(true);
  const [pagingError, setPagingError] = useState(false);
  const [workspaceList, setWorkpaceList] = useState<any>([]);
  const [workspaceListCheck, setWorkspaceListCheck] = useState(true);

  useEffect(() => {
    setWorkpaceList([]);
  }, [searKeyPress, keyUpReset]);

  useEffect(() => {
    setLoading(true);
    setPagingError(false);
    fetchWorkspaceListAPI();
  }, [searKeyPress, page, keyUpReset]);

  useEffect(() => {
    setPagingError(false);
  }, [errorClear]);

  const fetchWorkspaceListAPI = () => {
    api
      .getWorkspaceListAPI(searKeyPress, page)
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
        if (payload.response.count < 1) {
          setWorkspaceListCheck(false);
        }
      })
      .catch(() => {
        setPagingError(true);
      });
  };

  return { loading, workspaceList, pagingError, workspaceListCheck };
}
