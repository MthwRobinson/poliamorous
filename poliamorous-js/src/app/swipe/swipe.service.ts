import { Injectable } from '@angular/core';

import { User } from '../user/user';
import { MATCHES } from './mock-matches';

@Injectable()
export class SwipeService {
  getMatches(): Promise<User[]> {
    return Promise.resolve(MATCHES);
  }

  getMatch(id: number): Promise<User>{
    return this.getMatches()
      .then(matches => matches
        .find(match => match.id === id));
  }
}
