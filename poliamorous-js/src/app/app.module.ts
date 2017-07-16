// Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Poliamorous Components
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { ProfileComponent } from './profile/profile.component';
import { SwipeComponent } from './swipe/swipe.component';

// Poliamorous Services and Routing
import { AppRoutingModule } from './app-routing.module';
import { QuestionService } from './question/question.service';
import { PriorityService } from './priorities/priorities.service';
import { ProfileService } from './profile/profile.service';
import { SwipeService } from './swipe/swipe.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    PrioritiesComponent,
    ProfileComponent,
    SwipeComponent
  ],
  providers: [
    QuestionService,
    PriorityService,
    ProfileService,
    SwipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
