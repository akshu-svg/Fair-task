import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/models/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() getFair !: Ifair;
  constructor() { }

  ngOnInit(): void {
  }

}
