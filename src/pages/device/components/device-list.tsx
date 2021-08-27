import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showHeader } from '../../../_store/slice/header-option';
import { AddSearchWork } from '../../../_layout/top-navigator/right-context/add-search-work';
import api from '../../../_api/backend';

export function DeviceList(props: any) {
  const dispatch = useDispatch();
  const [devicesForMap, setDevicesForMap] = useState<any[]>([]);

  useEffect(() => {
    dispatch(
      showHeader({
        title: '장비 현황',
        leftContextType: 'menu',
        rightContext: () => (
          <AddSearchWork
            onClickAddWork={onClickAddWork}
            onClickAddFault={onClickAddFault}
            onClickSearch={onClickSearch}
          />
        ),
      })
    );

    fetchDevices();
  }, []);

  const fetchDevices = () => {
    api.getDevicesForMap().then((payload: any) => {
      const { code, response } = payload;
      if (code === 200 && response && Array.isArray(response.results)) {
        setDevicesForMap(response.results);
      }
    });
  };

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
    history.push(`/device/${workId}`);
  };

  return (
    <div>
      <h1>this is device list</h1>
      <ul>
        {devicesForMap.map((device) => (
          <li key={device.device_uuid} onClick={() => onClickItem(device.device_uuid)}>
            {device.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
