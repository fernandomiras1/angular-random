const URL_DOMAIN = 'https://web.tst.promotions.us-east-1.awsnaranja.com';

export const environment = {
  production: false,
  auth0: {
    clientId: '2Baa6T0cD01V3twmKBvb59vH5p4Q9kzI',
    redirectUrl: `${URL_DOMAIN}/callback`,
    scope: 'openid email profile',
    domain: 'naranja-users-e3.auth0.com',
    audience: 'https://naranja.com/nonline/api',
    sessionExpired: `${URL_DOMAIN}/session-expired`,
    logout: `${URL_DOMAIN}/logout`,
  },
  googleMaps: {
    BASE_URL: 'https://maps.googleapis.com/maps/api/staticmap?center=',
    MAP_CONFIG: '&zoom=15&size=360x280&maptype=roadmap&markers=color:orange%7Clabel:20+perc%7C',
    MAP_CONFIG_WEB: '&zoom=15&scale=2&size=640x240&maptype=roadmap&markers=color:orange%7Clabel:20+perc%7C',
    API_KEY: '&key=AIzaSyAPaSjh1_noVsuSD-r2wEpV4nvneEa8V2E',
    BASE_API_KEY: 'AIzaSyAPaSjh1_noVsuSD-r2wEpV4nvneEa8V2E',
    GEOCODE_API: 'https://maps.googleapis.com/maps/api/geocode/json?language=es',
    MAP_URL_API: 'https://www.google.com/maps/search/?api=1',
  },
  endpoints: {
    BASE_URL_BFF: 'https://bff.tst.promotions.us-east-1.awsnaranja.com/bff-promotions-web/api/bff-promotions',
    BASE_URL_LOGO: 'https://images.dev.promotions.us-east-1.awsnaranja.com/images',
    BASE_URL_LOGO_FEATURED: 'https://images.dev.promotions.us-east-1.awsnaranja.com/featured',
  },
  gtmId: {
    COM: 'GTM-P8LHTVV',
  },
  contentful: {
    BASE_URL_WEB: 'https://e2-www.naranja.com',
    BASE_URL_BFF: 'https://e2-webnaranja.backendnaranja.com',
  },
  watchdogTimer: 1000,
  filterAlwaysVisibleCategories: ['Moda y accesorios', 'Supermercados', 'Electro y tecnología', 'Salud y bienestar'],
};
