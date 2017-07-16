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

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.swipeService.getMatch(2))
    .subscribe(user => this.user = user);
  }

}
