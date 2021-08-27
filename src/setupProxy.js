const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/platform/*',
    proxy({
      target: 'https://api-172-30-10-101.vurix.kr/platform',
      pathRewrite: { '^/platform/*': '' },
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    '/emap/*',
    proxy({
      target: 'https://dev-m-dongnae.vurixcloud.com/emap/',
      pathRewrite: { '^/emap/*': '' },
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    '/emaphd/*',
    proxy({
      target: 'https://dev-m-dongnae.vurixcloud.com/emaphd/',
      pathRewrite: {
        '^/emaphd/*': '',
      },
      secure: false,
      changeOrigin: true,
    })
  );

  // GIS Backend API 관련 Proxy 설정
  app.use(
    '/dms-gis/api/*',
    proxy({
      target: 'https://dev-m-dongnae.vurixcloud.com/dms-gis/api',
      pathRewrite: {
        '^/dms-gis/api/*': '',
      },
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    '/vurix-dms/api/*',
    proxy({
      target: 'https://dev-m-dongnae.vurixcloud.com/vurix-dms/api',
      pathRewrite: {
        '^/vurix-dms/api/*': '',
      },
      secure: false,
      changeOrigin: true,
    })
  );
};
