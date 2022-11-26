import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { EventsList } from './events/events.component';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {

  constructor(private http : HttpClient) { }
private apiBaseUrl = 'http://localhost:3000/api/';

public getEvents(): Promise<EventsList[]> {
		const url: string = `${this.apiBaseUrl}/events `; 
		return this.http 

		.get(url) 
		.toPromise() 
		.then(response => response as EventsList[]) 
		.catch(this.handleError); 
	}
private handleError(error: any): Promise<any> { 
	console.error('Something has gone wrong', error); 
	return Promise.reject(error.message || error); 
} // end get events



} // end of file 
