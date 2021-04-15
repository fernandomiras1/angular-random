import { Marker } from '@agm/core/services/google-maps-types';
import { CalculatorResult, ClusterStyle } from '@agm/js-marker-clusterer/services/google-clusterer-types';

import { ImagesUtils } from '../shared/utils/images.utils';

export const mapStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export const clusterStyles: ClusterStyle[] = [
  {
    backgroundPosition: '0 7px',
    textColor: '#333333',
    url: 'assets/images/pointers/beneficio_multiple.svg',
    height: 64,
    width: 90,
    anchor: [-63, 0],
    textSize: 14,
  },
];

export function calculatorText(marker: Marker[], count: number): CalculatorResult {
  return {
    text: `${marker.length} promos`,
    index: count,
  };
}

export function getIcon(title, isSelected) {
  const cleanText = ImagesUtils.generateName(title, '_');
  const newTitle = cleanText.replace('%', '');
  return {
    labelOrigin: { x: 48, y: -5 },
    url: `assets/images/${isSelected ? 'pointers-dark' : 'pointers'}/${newTitle}.svg`,
  };
}

export const mapImageSrc = 'assets/images/logos/ilustracion-mapa.svg';

export const zoomLevelToMeters = {
  20: 100,
  19: 200,
  18: 500,
  17: 800,
  16: 1000,
  15: 2000,
  14: 4000,
  13: 8000,
  12: 16000,
  11: 32000,
  10: 64000,
  9: 128000,
  8: 256000,
};

export const provinceMap = {
  CABA : 'Capital Federal',
  'Provincia de Buenos Aires': 'Buenos Aires',
};

export function zoomLevelToKM(zoom) {
  const meters = zoomLevelToMeters[zoom];
  return meters / 1000;
}
