import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/question/1',
    pathMatch: 'full'
  },
  {
    path: 'question/:id',
    component: QuestionComponent
  },
  {
    path: 'priorities',
    component: PrioritiesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{
}
