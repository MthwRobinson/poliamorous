import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Priority } from './priority';
import { PriorityService } from './priorities.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})
export class PrioritiesComponent implements OnInit {
  //Constructor
  constructor(
    private priorityService: PriorityService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  // Attributes
  @Input() priorities: Priority[];

  //Methods
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.priorityService.getPriorities())
    .subscribe(priorities => this.priorities = priorities);  
  }

  saveSettings(): void{
    // Stand in for now ... will post updates to database
    //  once we have that built
  }

}
