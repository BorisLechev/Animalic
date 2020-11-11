import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from '../../shared/models/EventModel';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input('event')
  event: EventModel;

  constructor() { }

  ngOnInit(): void {
  }

}
