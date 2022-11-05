import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProblemListModule } from 'src/app/components/problems-list/problem-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProblemListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
