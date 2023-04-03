import type {PingStatus} from '@prisma/client';
import {getPingTimeout} from './environment';

export type MonitorPingableType = {id: string; url: string; arguments: string};
export type MonitorPingResponse = {status: PingStatus; error?: string};

export interface IPingable {
  check(monitor: MonitorPingableType): Promise<MonitorPingResponse>;
}

export class Ping implements IPingable {
  async check(monitor: MonitorPingableType): Promise<MonitorPingResponse> {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      controller.abort();
    }, getPingTimeout() * 1000);

    let response: Response | undefined = undefined;
    try {
      response = await fetch(monitor.url, {signal});
      // eslint-disable-next-line no-empty
    } catch {}

    if (response?.ok) {
      return {status: 'SUCCESS'};
    }

    return {status: 'ERROR', error: response?.statusText};
  }
}
export class Http implements IPingable {
  async check(monitor: MonitorPingableType): Promise<MonitorPingResponse> {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      controller.abort();
    }, getPingTimeout() * 1000);

    let response: Response | undefined = undefined;
    try {
      response = await fetch(monitor.url, {signal});
      // eslint-disable-next-line no-empty
    } catch {}

    if (response?.ok) {
      return {status: 'SUCCESS'};
    }

    return {status: 'ERROR', error: response?.statusText};
  }
}
