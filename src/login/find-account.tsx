import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './find-account.css';
import { RouteComponentProps } from 'react-router-dom';
import * as toast from '../_store/slice/toast';
import gisServer from '../_api/gis-backend';

export function FindAccount({ history }: RouteComponentProps) {
  const dispatch = useDispatch();
  const [areas, setAreas] = useState<any[]>([]);
  const [findMode, setFindMode] = useState<'id' | 'pwd'>('id');
  const [pinStep, setPinStep] = useState<'init' | 'issued' | 'checked'>('init');
  const [pin, setPin] = useState<string>('');
  const [account, setAccount] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [birthDay, setBirthDay] = useState<string>('');
  const [areaCode, setAreaCode] = useState<string>('NONE');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [pinCode, setPinCode] = useState<string>('');
  const [foundId, setFoundId] = useState<string>();
  const [newPwd, setNewPwd] = useState<string>('');
  const [newPwd2, setNewPwd2] = useState<string>('');
  const [foundPwd, setFoundPwd] = useState<string>();

  const fetchAreas = () => {
    gisServer
      .getAreas()
      .then((payload) => {
        return payload?.response?.results?.map((result: any) => ({
          code: result.code,
          name: result.code_name,
        }));
      })
      .then((items) => {
        setAreas(items ?? []);
      });
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  useEffect(() => {
    setPinStep('init');
    setPin('');
    setAccount('');
    setUserName('');
    setBirthDay('');
    setAreaCode('NONE');
    setPhoneNumber('');
    setPinCode('');
  }, [findMode]);

  const onClickIssuePin = async () => {
    const isValid = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}$/.test(phoneNumber);
    if (!isValid) {
      dispatch(toast.error({ message: '전화번호를 확인해 주세요.' }));
      return;
    }

    gisServer.issuePin({ dest_phone: phoneNumber }).then(() => {
      setPinStep('issued');
      dispatch(toast.info({ message: '인증번호가 전송되었습니다.' }));
    });
  };

  const onClickCheckPin = async () => {
    const isValid = pinCode.length === 6;
    if (!isValid) {
      dispatch(toast.error({ message: '6자리 인증번호를 입력해 주세요.' }));
      return;
    }

    gisServer.checkPin(phoneNumber, pinCode).then((payload) => {
      if (payload?.code === 200 && payload?.response?.jwt) {
        setPinStep('checked');
        setPin(payload.response.jwt);
        dispatch(toast.info({ message: '인증 성공하였습니다.' }));
      } else {
        dispatch(toast.error({ message: '인증 실패하였습니다. 번호를 다시 확인해 주세요.' }));
      }
    });
  };

  const checkValidation = () => {
    if (findMode === 'pwd' && account.length < 2) {
      dispatch(toast.error({ message: '아이디를 확인해 주세요.' }));
      return false;
    }

    if (userName.length < 2) {
      dispatch(toast.error({ message: '이름을 확인해 주세요.' }));
      return false;
    }

    if (/^[0-9]{6}$/.test(birthDay) === false) {
      dispatch(toast.error({ message: '생년월일을 확인해 주세요.' }));
      return false;
    }

    if (areaCode === 'NONE') {
      dispatch(toast.error({ message: '지역을 선택해 주세요.' }));
      return false;
    }

    if (pinStep !== 'checked' || pin.length <= 0) {
      dispatch(toast.error({ message: '휴대폰 번호 인증을 완료해 주세요.' }));
      return false;
    }

    return true;
  };

  const checkNewPwdValidation = () => {
    if (newPwd.trim().length <= 2) {
      dispatch(
        toast.error({ message: '비밀번호는 8-16자 영문, 숫자, 특수문자 모두 포함하여야 합니다.' })
      );
      return false;
    }

    if (newPwd !== newPwd2) {
      dispatch(toast.error({ message: '비밀번호가 일치하지 않습니다.' }));
      return false;
    }

    return true;
  };

  const onClickFindId = async () => {
    if (checkValidation() === false) {
      return;
    }

    const findIdPayload = {
      user_name: userName,
      birth_day: birthDay,
      area: areaCode,
      mobile_number: phoneNumber,
    };

    gisServer.findId(pin, findIdPayload).then((payload) => {
      if (payload?.code === 200 && payload?.response?.user_account) {
        setFoundId(payload.response.user_account);
      }
    });
  };

  const onClickFindPwd = async () => {
    if (!foundPwd) {
      if (checkValidation() === false) {
        return;
      }

      const findPwdPayload = {
        user_account: account,
        user_name: userName,
        birth_day: birthDay,
        area: areaCode,
        mobile_number: phoneNumber,
      };

      gisServer.findPwd(pin, findPwdPayload).then((payload) => {
        if (payload?.code === 200 && payload?.response?.jwt) {
          setFoundPwd(payload?.response?.jwt);
        }
      });
    } else {
      if (checkNewPwdValidation() === false) {
        return;
      }

      gisServer.resetPwd(foundPwd, { pwd: newPwd }).then((payload) => {
        if (payload?.code === 200) {
          dispatch(toast.info({ message: '비밀번호를 재설정 하였습니다.' }));
          history.replace('/login');
        }
      });
    }
  };

  const onClickCancel = () => {
    history.goBack();
  };

  return (
    <>
      {foundId && (
        <main className="login found-your-account dark-theme">
          <h2>아이디 찾기 완료</h2>
          <section className="inputs">
            <div className="input">
              <span />
              <input type="text" value={foundId} readOnly />
            </div>
          </section>
          <section className="main-buttons">
            <button className="btn-signin" type="button" onClick={() => history.push('/login')}>
              확인
            </button>
          </section>
        </main>
      )}
      {!foundId && (
        <main className="login find-your-account dark-theme">
          <ul className="tabs">
            <li onClick={() => setFindMode('id')} className={findMode === 'id' ? 'active' : ''}>
              아이디 찾기
            </li>
            <li onClick={() => setFindMode('pwd')} className={findMode === 'pwd' ? 'active' : ''}>
              비밀번호 찾기
            </li>
          </ul>
          <div className={`tab-content ${findMode === 'id' ? 'active' : ''}`}>
            <section className="inputs">
              <div className="input required">
                <input
                  type="text"
                  placeholder="*이름"
                  value={userName}
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
              <div className="input required">
                <input
                  type="text"
                  placeholder="*생년월일 6자리(주민등록번호 앞자리)"
                  value={birthDay}
                  onChange={(event) => {
                    setBirthDay(event.target.value);
                  }}
                />
              </div>
              <div className="input required">
                <div className="selectbox">
                  <select
                    name="location"
                    value={areaCode}
                    onChange={(event) => {
                      setAreaCode(event.target.value);
                    }}
                  >
                    <option value="NONE" disabled>
                      *지역
                    </option>
                    {areas.map((area) => (
                      <option value={area.code} key={area.code}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input phone required">
                <div>
                  <input
                    type="number"
                    placeholder="*휴대폰 번호(-없이 숫자만 입력)"
                    maxLength={11}
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                    readOnly={pinStep === 'issued' || pinStep === 'checked'}
                    disabled={pinStep === 'issued' || pinStep === 'checked'}
                  />
                  <button
                    type="button"
                    disabled={pinStep === 'issued' || pinStep === 'checked'}
                    onClick={onClickIssuePin}
                  >
                    인증번호 받기
                  </button>
                </div>
              </div>
              {pinStep !== 'init' ? (
                <div className="input phone required">
                  <div>
                    <input
                      type="number"
                      placeholder="*인증번호 입력"
                      maxLength={6}
                      disabled={pinStep === 'checked'}
                      value={pinCode}
                      onChange={(event) => {
                        setPinCode(event.target.value);
                      }}
                    />
                    <button
                      type="button"
                      disabled={pinStep === 'checked'}
                      onClick={onClickCheckPin}
                    >
                      인증번호 확인
                    </button>
                  </div>
                </div>
              ) : (
                ''
              )}
            </section>
            <section className="main-buttons">
              <button className="btn-signin" type="button" onClick={onClickFindId}>
                확인
              </button>
              <button className="" type="button" onClick={onClickCancel}>
                취소
              </button>
            </section>
          </div>
          <div className={`tab-content ${findMode === 'pwd' ? 'active' : ''}`}>
            {!foundPwd ? (
              <section className="inputs">
                <div className="input required">
                  <input
                    type="text"
                    placeholder="*아이디"
                    value={account}
                    onChange={(event) => setAccount(event.target.value)}
                  />
                </div>
                <div className="input required">
                  <input
                    type="text"
                    placeholder="*이름"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </div>
                <div className="input required">
                  <input
                    type="text"
                    placeholder="*생년월일 6자리(주민등록번호 앞자리)"
                    value={birthDay}
                    onChange={(event) => {
                      setBirthDay(event.target.value);
                    }}
                  />
                </div>
                <div className="input required">
                  <div className="selectbox">
                    <select
                      name="location"
                      value={areaCode}
                      onChange={(event) => {
                        setAreaCode(event.target.value);
                      }}
                    >
                      <option value="NONE" disabled>
                        *지역
                      </option>
                      {areas.map((area) => (
                        <option value={area.code} key={area.code}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input phone required">
                  <div>
                    <input
                      type="number"
                      placeholder="*휴대폰 번호(-없이 숫자만 입력)"
                      maxLength={11}
                      value={phoneNumber}
                      onChange={(event) => {
                        setPhoneNumber(event.target.value);
                      }}
                      disabled={pinStep === 'issued' || pinStep === 'checked'}
                    />
                    <button
                      type="button"
                      disabled={pinStep === 'issued' || pinStep === 'checked'}
                      onClick={onClickIssuePin}
                    >
                      인증번호 받기
                    </button>
                  </div>
                </div>
                {pinStep !== 'init' ? (
                  <div className="input phone required">
                    <div>
                      <input
                        type="number"
                        placeholder="*인증번호 입력"
                        maxLength={6}
                        disabled={pinStep === 'checked'}
                        value={pinCode}
                        onChange={(event) => {
                          setPinCode(event.target.value);
                        }}
                      />
                      <button
                        type="button"
                        disabled={pinStep === 'checked'}
                        onClick={onClickCheckPin}
                      >
                        인증번호 확인
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </section>
            ) : (
              <section className="inputs">
                <div className="found-pwd">
                  <h4>비밀번호 찾기를 완료하였습니다.</h4>
                  <h4>비밀번호 변경 후 사용해주세요.</h4>
                </div>
                <div className="input required">
                  <input
                    type="password"
                    placeholder="*새 비밀번호 입력 (영문, 숫자, 특수문자 모두 포함)"
                    value={newPwd}
                    onChange={(event) => setNewPwd(event.target.value)}
                  />
                </div>
                <div className="input required">
                  <input
                    type="password"
                    placeholder="*새 비밀번호 확인"
                    value={newPwd2}
                    onChange={(event) => setNewPwd2(event.target.value)}
                  />
                </div>
              </section>
            )}
            <section className="main-buttons">
              <button className="btn-signin" type="button" onClick={onClickFindPwd}>
                확인
              </button>
              <button className="" type="button" onClick={onClickCancel}>
                취소
              </button>
            </section>
          </div>
        </main>
      )}
    </>
  );
}
