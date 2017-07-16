import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { User } from '../user/user';
import { ProfileService } from './profile.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  //Constructor
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  @Input() user: User;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.profileService.getProfile())
    .subscribe(user => this.user = user);
  }

}
