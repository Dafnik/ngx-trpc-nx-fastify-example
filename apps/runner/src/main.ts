import {pingWorker} from './worker';
import {Job} from 'bullmq';

let hasShutdown = false;

export async function shutdown() {
  if (!hasShutdown) {
    hasShutdown = true;
    console.log('');

    console.log('Runner: Closing workers...');
    for (const worker of workers) {
      await worker.close();
    }
    console.log('Runner: Cosing workers finished');
  }
}
process.on('SIGTERM', shutdown);

process.on('exit', shutdown);
process.on('SIGINT', shutdown);

// Application code

const workers = [pingWorker];

for (const worker of workers) {
  worker.on('error', (err) => {
    console.error(err);
  });
  worker.on('failed', (job: Job, error: Error) => {
    console.log(`Runner: job ${job.id} failed`, error);
  });
}

console.log('Runner: Workers started');
