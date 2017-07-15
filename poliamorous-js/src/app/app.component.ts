import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Constructor
  constructor(
    private router: Router,
  ){}

  title = 'Poliamorous';

  navigate(page: string): void {
    if(page=='questions'){
      this.router.navigate(['/question',1])
    }
    else if(page=='priorities'){
      this.router.navigate(['/priorities'])
    }
  }

}
