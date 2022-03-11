/*
 * 지도의 축척 별 클러스터 계산 값, 지도 위 표출될 아이콘의 사이즈에 따라 값이 달라 진다.
 * key: 아이콘사이즈, value: 거리 값
 */
export const CluasterDistanceOfIconSize = {
  48: 75,
  40: 90,
  32: 105,
  24: 150,
  16: 265,
};

/*
 * 자산 요청 대상 레이어명 (다중 레이어 처리를 위한 배열)
 */
export const LayerNames = ['layer_cctv'];

export const IconSize = 24;
