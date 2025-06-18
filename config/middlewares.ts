export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-bucket.s3.gra.io.cloud.ovh.net',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://strapi-bucket.s3.gra.io.cloud.ovh.net',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
