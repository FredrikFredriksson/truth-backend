export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL", "https://your-app-url.com"),
  proxy: env.bool("IS_PROXIED", true),
  cron: {
    enabled: env.bool("CRON_ENABLED", false),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
