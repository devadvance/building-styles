import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("styles/queen-anne", "routes/styles/queen-anne.tsx"),
  route("styles/craftsman", "routes/styles/craftsman.tsx"),
  route("styles/tudor-revival", "routes/styles/tudor-revival.tsx"),
  route("styles/classical-revival", "routes/styles/classical-revival.tsx"),
  route("styles/mediterranean-revival", "routes/styles/mediterranean-revival.tsx"),
  route("styles/minimal-traditional", "routes/styles/minimal-traditional.tsx"),
  route("styles/ranch", "routes/styles/ranch.tsx"),
] satisfies RouteConfig;
