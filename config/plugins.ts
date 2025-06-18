export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          endpoint: env("OVH_ENDPOINT"),
          credentials: {
            accessKeyId: env("OVH_ACCESS_KEY_ID"),
            secretAccessKey: env("OVH_SECRET_ACCESS_KEY"),
          },
          region: env("OVH_REGION"),
          params: {
            Bucket: env("OVH_BUCKET")
          },
        },
      }
    },
  },
});
