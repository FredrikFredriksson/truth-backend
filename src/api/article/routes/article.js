module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles",
      handler: "article.find",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/articles/:id",
      handler: "article.findOne",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/articles",
      handler: "article.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/articles/:id",
      handler: "article.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/articles/:id",
      handler: "article.delete",
      config: {
        policies: [],
      },
    },
  ],
};
