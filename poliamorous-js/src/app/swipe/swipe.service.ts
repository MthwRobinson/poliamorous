import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { USER } from './mock-users';

@Injectable()
export class SwipeService {
  getSwipe(): Promise<User> {
    return Promise.resolve(USER);
  }
}
