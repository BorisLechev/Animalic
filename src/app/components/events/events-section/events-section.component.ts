import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../shared/models/EventModel';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss']
})
export class EventsSectionComponent implements OnInit {
  events: EventModel[] = [
    { name: "Изложение - Незабравка", address: "ул. Панорама №24", town: "варна", date: "12.12.2020" },
    { name: "Най-бърз дакел", address: "ж.к. Кайсиева градина", town: "варна", date: "13.12.2020" },
    { name: "Котка на годината", address: "к.к. Св.Св. Константин и Елена", town: "варна", date: "17.12.2020" },
    { name: "Изложение - Незабравка", address: "ул. Суходолско езеро 5", town: "софия", date: "12.12.2020" },
    { name: "Каракачанки - София", address: "Вет. клиника 'Есковет' ж.к. Надежда ул. Христо Стоянов 61-63", town: "софия", date: "12.12.2020" },
    { name: "Котка на годината", address: "ж.к. Красно село ул. Княгина Клементина 28", town: "софия", date: "18.12.2020" },
    { name: "На тепетата с дом. любимци", address: "ж.к. Тракия срещу блок 83", town: "пловдив", date: "12.12.2020" },
    { name: "Караоке с куче", address: "бул. Марица 27", town: "пловдив", date: "12.12.2020" },
    { name: "Котка на годината", address: "Пазарджишко шосе №93, 4 км.", town: "пловдив", date: "12.12.2020" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
