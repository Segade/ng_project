import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class AppModule { }
