// Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Poliamorous Components
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

// Poliamorous Services and Routing
import { AppRoutingModule } from './app-routing.module';
import { QuestionService } from './question/question.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
