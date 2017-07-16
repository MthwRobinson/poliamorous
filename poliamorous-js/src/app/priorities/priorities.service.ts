import { Injectable } from '@angular/core';

import { Priority } from './priority';
import { PRIORITIES } from './mock-priorities';

@Injectable()
export class PriorityService {
  getPriorities(): Promise<Priority[]> {
    return Promise.resolve(PRIORITIES);
  }
}
