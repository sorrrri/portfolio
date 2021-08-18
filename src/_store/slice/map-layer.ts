/* eslint-disable no-nested-ternary */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import gisServer from '../../_api/gis-backend';
import { LayerNames, IconSize } from '../../_constant/map';

export const fetchLayerStyles = createAsyncThunk(`map/fetchLayerStyles`, async () => {
  const styles = await gisServer
    .getLayerStyles({
      layer_id: LayerNames,
      icon_size: IconSize,
    })
    .then((payload) => {
      return payload?.response?.results ?? [];
    })
    .then((list: any[]) => {
      return list
        .sort((_1: any, _2: any) =>
          _1.sublayer_name < _2.sublayer_name ? -1 : _1.sublayer_name > _2.sublayer_name ? 1 : 0
        )
        .map((_: any) => ({
          ..._,
          checked: true,
        }));
    });

  return styles;
});

export const fetchGlobalProps = createAsyncThunk(`map/fetchGlobalProps`, async () => {
  const centerCoordinates = await gisServer.getGlobalPropOfHomeCoordinates().then((payload) => {
    if (payload?.response?.results) {
      const { results } = payload.response;
      if (Array.isArray(results) && results.length > 0 && results[0].prop_value) {
        const [lon, lat] = results[0].prop_value.split(' ');
        if (lon && lat && !Number.isNaN(lon) && !Number.isNaN(lat)) {
          return [Number(lon), Number(lat)];
        }
      }
    }

    return undefined;
  });

  return {
    centerCoordinates,
  };
});

type UpdateStyleToCheckOption = {
  id: string;
  checked: boolean;
};

export const mapLayer = createSlice({
  name: 'mapLayer',
  initialState: {
    styles: [] as any[],
    defaultCoordinates: [
      Number(process.env.REACT_APP_MAP_INIT_LON),
      Number(process.env.REACT_APP_MAP_INIT_LAT),
    ] as number[],
    centerCoordinates: [
      Number(process.env.REACT_APP_MAP_INIT_LON),
      Number(process.env.REACT_APP_MAP_INIT_LAT),
    ] as number[],
  },
  reducers: {
    updateStyleToChecked: (state, action: PayloadAction<UpdateStyleToCheckOption>) => {
      const styles = [...state.styles];
      const changingStyle: any = styles.find(
        (style: any) => style.sublayer_id === action.payload.id
      );
      changingStyle.checked = action.payload.checked;
      state.styles = styles;
    },
    setCenterCoordinates: (state, action: PayloadAction<number[]>) => {
      state.centerCoordinates = action.payload;
    },
  },
  extraReducers: {
    [fetchLayerStyles.fulfilled.type]: (state, action: PayloadAction<any>) => {
      const styles = action.payload.map((style: any) => {
        const existStyle: any = state.styles.find((_) => _.sublayer_id === style.sublayer_id);
        if (existStyle) {
          style.checked = existStyle.checked ?? true;
        } else {
          style.checked = true;
        }
        return style;
      });

      state.styles = styles;
    },
    [fetchGlobalProps.fulfilled.type]: (state, action: PayloadAction<any>) => {
      if (action.payload.centerCoordinates) {
        state.defaultCoordinates = action.payload.centerCoordinates;
      }
    },
  },
});

export const { updateStyleToChecked, setCenterCoordinates } = mapLayer.actions;
export default mapLayer.reducer;
