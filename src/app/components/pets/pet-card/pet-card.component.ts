import { Component, Input, OnInit } from '@angular/core';
import { PetCardModel } from '../../shared/models/PetCardModel';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input('pet')
  pet: PetCardModel;

  constructor() { }

  ngOnInit(): void {
  }
}
