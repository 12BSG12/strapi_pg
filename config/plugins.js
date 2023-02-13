module.exports = {
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          "api::post.post",
          "api::banner.banner",
          "api::slid.slid",
        ],
      },
    },
  },
};
