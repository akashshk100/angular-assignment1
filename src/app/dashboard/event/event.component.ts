import {Component, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { EventModel } from './event.model'

@Component({
    selector: 'event-comp',
    templateUrl: './event.component.html'
})
export class EventComponent implements OnInit{
    constructor(private http: HttpClient){

    }

    events: EventModel[] = [];
    ngOnInit(){
        this.http.get("https://api.mockaroo.com/api/01cdaa00?count=6&key=6b5d9e30")
        .subscribe((response: any[]) => {
            response.forEach(event => {
                var eventObject = new EventModel()
                eventObject.eventName = event.EventName
                eventObject.eventTopic = event.EventTopic 
                eventObject.eventStartTime = event.StartTime 
                eventObject.eventEndTime = event.EndTime
                eventObject.eventPlace = event.EventPlace 
                eventObject.contactPerson = event.ContactPerson
                eventObject.contactPersonNumber = event.ContactPersonNumber
                this.events.push(eventObject)
            })
        })
    }
}