import {Job, Worker} from 'bullmq';
import {getConcurrentJobsPerWorker} from '@poweruptime/common';
import {pingQueueName, redisConnection} from '@poweruptime/bull';

export const pingWorker = new Worker(
  pingQueueName,
  async (job: Job) => {
    console.log('newjob', job.data);
    // Do something with job
    return 'some valuee';
  },
  {concurrency: getConcurrentJobsPerWorker(), connection: redisConnection, removeOnComplete: {count: 1000}, removeOnFail: {count: 1000}}
);
