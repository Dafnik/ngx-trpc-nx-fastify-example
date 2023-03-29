import {Job, Worker} from 'bullmq';
import {pingQueue, pingQueueName} from './queues';
import {redisConnection} from './connection';
import {getConcurrentJobsPerWorker} from '@poweruptime/common';

const pingWorker = new Worker(
  pingQueueName,
  async (job: Job) => {
    console.log('newjob', job);
    // Do something with job
    return 'some valuee';
  },
  {concurrency: getConcurrentJobsPerWorker(), connection: redisConnection}
);

await pingQueue.add('house', {color: 'white'}, {delay: 5000});
