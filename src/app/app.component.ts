import {Component, OnInit} from '@angular/core';
import {Level, Technic, TECHNICS, Waza} from './techincData';

type DefaultDropdownValue = 'ALL';
const DEFAULT_DROPDOWN_VALUE: DefaultDropdownValue = 'ALL';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  readonly technics: Technic[] = TECHNICS;
  idoriTechnics: Technic[] = TECHNICS;
  tachiaiTechnics: Technic[] = TECHNICS;
  ushiroTechnics: Technic[] = TECHNICS;
  hanzaHandachiTechnics: Technic[] = TECHNICS;
  waza = [DEFAULT_DROPDOWN_VALUE, ...Object.values(Waza)];
  level = [DEFAULT_DROPDOWN_VALUE, ...Object.values(Level)];
  wazaFilter: Waza | DefaultDropdownValue = DEFAULT_DROPDOWN_VALUE;
  levelFiler: Waza | DefaultDropdownValue = DEFAULT_DROPDOWN_VALUE;

  ngOnInit(): void {
    this.wazaFilter = DEFAULT_DROPDOWN_VALUE;
    this.levelFiler = DEFAULT_DROPDOWN_VALUE;
    this.filter();
  }

  filter() {
    const displayedTechnics = this.technics
      .filter((technic: Technic) => technic.waza === this.wazaFilter || this.wazaFilter === DEFAULT_DROPDOWN_VALUE)
      .filter((technic: Technic) => technic.level.includes(this.levelFiler as Level) || this.levelFiler === DEFAULT_DROPDOWN_VALUE);

    this.tachiaiTechnics = displayedTechnics.filter((technic: Technic) => technic.waza === Waza.Tachiai).sort(this.sortById);
    this.idoriTechnics = displayedTechnics.filter((technic: Technic) => technic.waza === Waza.Idori).sort(this.sortById);
    this.ushiroTechnics = displayedTechnics.filter((technic: Technic) => technic.waza === Waza.Ushiro).sort(this.sortById);
    this.hanzaHandachiTechnics = displayedTechnics.filter((technic: Technic) => technic.waza === Waza.HanzaHandachi).sort(this.sortById);
  }

  private sortById(a: Technic, b: Technic): number {
    return a.id - b.id;
  }
}
