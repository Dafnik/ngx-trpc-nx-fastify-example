import IORedis from 'ioredis';
import {getEnvironment, getRedisPort} from '@poweruptime/common';

const globalWithRedis = globalThis as unknown as {redis: IORedis};

export const redisConnection =
  globalWithRedis.redis ||
  new IORedis({
    port: getRedisPort(),
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  });

if (getEnvironment() !== 'production') globalWithRedis.redis = redisConnection;
