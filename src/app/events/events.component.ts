24
import { Component } from '@angular/core';


export class EventsList { 
Name!: string; 
Hour!: string; 
Day!: string; 
Location!: string; 
Town!: string; 
}


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
/*
export class EventsComponent {

}
*/
export class EventsComponent implements OnInit {
constructor() { }
eventsList: EventsList = {
Name: 'Athletics',
Hour: '11:30',
Day: '11/12/2022',
Location: 'Stadium',
Town: 'Tralee'
};


ngOnInit(): void { }
}

