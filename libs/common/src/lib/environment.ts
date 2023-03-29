export function getEnvironment() {
  return process.env['NODE_ENV'] as 'production' | 'development';
}

export function getRedisPort() {
  return (process.env['REDIS_PORT'] as number | undefined) ?? 6379;
}

export function getConcurrentJobsPerWorker() {
  return (process.env['CONCURRENT_JOBS_PER_WORKER'] as number | undefined) ?? 10;
}
