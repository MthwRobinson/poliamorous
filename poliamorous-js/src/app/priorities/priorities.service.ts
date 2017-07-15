import { Injectable } from '@angular/core';

import { PRIORITIES } from './mock-priorities';

@Injectable()
export class PriorityService {
  getPriorities(): Promise<string[]> {
    return Promise.resolve(PRIORITIES);
  }
}
