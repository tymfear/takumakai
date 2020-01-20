import {Component, Input, OnInit} from '@angular/core';
import {Level, Technic} from '../techincData';

@Component({
  selector: 'app-technic-table',
  templateUrl: './technic-table.component.html',
  styleUrls: ['./technic-table.component.scss']
})
export class TechnicTableComponent implements OnInit {
  @Input() technics: Technic[];
  @Input() header: string;
  displayedColumns = ['name', ...Object.values(Level) as string[]];

  constructor() {
  }

  ngOnInit() {
  }

}
