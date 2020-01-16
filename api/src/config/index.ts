export const config = {
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.VIRTUAL_PORT || process.env.PORT || 3000,
  },
  logLevel: process.env.LOG_LEVEL || 'debug',
  env: process.env.NODE_ENV || 'development',
  nodeClusterEnabled:
    (process.env.ENABLE_NODE_CLUSTER && process.env.ENABLE_NODE_CLUSTER.toLowerCase() === 'true') || false,
}
