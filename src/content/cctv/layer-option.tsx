import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ReducerType } from '../../_store';
import { updateStyleToChecked } from '../../_store/slice/map-layer';

type Props = {
  onHide: () => void;
};

export const LayerOption = React.forwardRef((props: Props, ref) => {
  const mapLayer = useSelector<ReducerType, any>((state) => state.mapLayer);
  const dispatch = useDispatch();
  const { onHide } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [styles, setStyles] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  useEffect(() => {
    setStyles(mapLayer.styles);
  }, [mapLayer.styles]);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    onHide();
  };

  return (
    <>
      <div className={`overlay ${visible ? 'active' : ''}`} onClick={hide} />
      <aside className={`local-navigation-menu ${visible ? 'active' : ''}`}>
        {/* <div className="filters">
        <h4>지도 유형</h4>
        <button type="button">
          <input type="radio" id="commonMap" name="filter-maps" />
          <label htmlFor="commonMap">
            <span>일반지도</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="satelliteMap" name="filter-maps" />
          <label htmlFor="satelliteMap">
            <span>위성지도</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="hybridMap" name="filter-maps" />
          <label htmlFor="hybridMap">
            <span>하이브리드지도</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="cadastralMap" name="filter-maps" />
          <label htmlFor="cadastralMap">
            <span>지적편집도</span>
          </label>
        </button>
        <button type="button">
          <input type="radio" id="topographicalMap" name="filter-maps" />
          <label htmlFor="topographicalMap">
            <span>지형도</span>
          </label>
        </button>
      </div> */}
        <div className="filters">
          <h4>마커 표시</h4>
          {styles.map((style) => (
            <button type="button" className="checkbox" key={style.sublayer_id}>
              <input
                type="checkbox"
                id={style.sublayer_id}
                name="filter-markers"
                checked={style.checked}
                onChange={(event) => {
                  dispatch(
                    updateStyleToChecked({
                      id: style.sublayer_id,
                      checked: event.target.checked,
                    })
                  );
                }}
              />
              <label htmlFor={style.sublayer_id}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg> */}
                <img src={style.icon_img} alt={`[${style.sublayer_name}]`} />
                <span>&nbsp;{style.sublayer_name}</span>
              </label>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
});

LayerOption.propTypes = {
  onHide: PropTypes.func.isRequired,
};

export default LayerOption;
