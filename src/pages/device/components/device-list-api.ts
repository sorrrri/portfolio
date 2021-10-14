import { useState, useEffect } from 'react';
import api from '../../../_api/backend/index';

export default function DeviceListAPI(
  type: string,
  searKeyPress: string,
  page: any,
  keyUpReset: any
) {
  const [loading, setLoading] = useState(true);
  const [searchDevices, setSearchDevices] = useState<any[]>([]);
  const [deviceListCheck, setDeviceListCheck] = useState(true);

  useEffect(() => {
    setSearchDevices([]);
  }, [searKeyPress, keyUpReset]);

  useEffect(() => {
    setLoading(true);
    fetchDevicesList();
  }, [searKeyPress, page, keyUpReset]);

  // 디바이스 리스트 api 호출
  const fetchDevicesList = () => {
    api
      .getDevicesForList(type, searKeyPress, page, 10)
      .then((payload: any) => {
        if (payload.response.results !== null) {
          const { code, response } = payload;
          if (code === 200 && response && Array.isArray(response.results)) {
            console.log(`fetchList >> `, payload);
            setSearchDevices((prevList: any) => {
              return [...prevList, response];
            });
          } else {
            setSearchDevices([]);
          }
        }
        if (payload.response.count < 1) {
          setDeviceListCheck(true);
        }
      })
      .catch(() => {
        console.log('PAGING ERROR');
      });
  };

  return { loading, searchDevices, deviceListCheck };
}
