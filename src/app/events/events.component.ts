 
//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../events-data.service';



export class EventsList{ 
name!: string; 
hour!: string; 
day!: string; 
location!: string; 
town!: string; 
}


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
providers: [EventsDataService]
})
 
export class EventsComponent implements OnInit  {
constructor(private eventsDataService : EventsDataService) { }
eventsList: EventsList[] = []; 
private getEvents () : void {
this.eventsDataService
.getEvents()
.then(foundEvents => {
this.eventsList = foundEvents;

}); // end then 

} // end get events


ngOnInit() {
this.getEvents();
}


}

