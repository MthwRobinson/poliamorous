import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { USER } from './mock-user';

@Injectable()
export class ProfileService {
  getProfile(): Promise<User> {
    return Promise.resolve(USER);
  }
}
