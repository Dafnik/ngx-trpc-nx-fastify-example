import {Queue} from 'bullmq';
import {redisConnection} from './connection';

export const pingQueueName = 'ping';

export const pingQueue = new Queue('ping', {connection: redisConnection});
