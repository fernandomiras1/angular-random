const URL_DOMAIN = 'https://promociones.naranja.com';

export const environment = {
  production: true,
  auth0: {
    clientId: 'ZdL4UUXMt8YCyFydPuVTm2kq1ljYW5x7',
    redirectUrl: `${URL_DOMAIN}/callback`,
    scope: 'openid email profile',
    domain: 'naranja-users.auth0.com',
    audience: 'https://naranja.com/nonline/api',
    sessionExpired: `${URL_DOMAIN}/session-expired`,
    logout: `${URL_DOMAIN}/logout`,
  },
  googleMaps: {
    BASE_URL: 'https://maps.googleapis.com/maps/api/staticmap?center=',
    MAP_CONFIG: '&zoom=15&size=360x280&maptype=roadmap&markers=color:orange%7Clabel:20+perc%7C',
    MAP_CONFIG_WEB: '&zoom=15&scale=2&size=640x240&maptype=roadmap&markers=color:orange%7Clabel:20+perc%7C',
    API_KEY: '&key=AIzaSyBYykJjr4cy-S_TBSGp0igQBBIRZ7VeI7E',
    BASE_API_KEY: 'AIzaSyBYykJjr4cy-S_TBSGp0igQBBIRZ7VeI7E',
    GEOCODE_API: 'https://maps.googleapis.com/maps/api/geocode/json?language=es',
    MAP_URL_API: 'https://www.google.com/maps/search/?api=1',
  },
  endpoints: {
    BASE_URL_BFF: 'https://promotions.backendnaranja.com/bff-promotions-web/api/bff-promotions',
    BASE_URL_LOGO: 'https://images-promotions.naranja.com/images',
    BASE_URL_LOGO_FEATURED: 'https://images-promotions.naranja.com/featured',
  },
  gtmId: {
    COM: 'GTM-P8LHTVV',
  },
  contentful: {
    BASE_URL_WEB: 'https://www.naranja.com',
    BASE_URL_BFF: 'https://www.backendnaranja.com',
  },
  watchdogTimer: 1000,
  filterAlwaysVisibleCategories: ['Moda y accesorios', 'Supermercados', 'Electro y tecnología', 'Salud y bienestar'],
};
