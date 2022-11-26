import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';

 

 
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
