import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { User } from '../user/user';
import { SwipeService } from './swipe.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent {
  //Constructor
  constructor(
    private swipeService: SwipeService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  @Input() user: User;
  matchSelection: number = 1;

  ngOnInit(): void {
    this.getMatch(this.matchSelection);
  }

  getMatch(id: number): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.swipeService.getMatch(id))
        .subscribe(user => this.user = user);
  }

  getNext(): void {
    // Will also need to post results to database
    //  once it's up and running
    this.matchSelection += 1;
    this.getMatch(this.matchSelection);
  }
}
