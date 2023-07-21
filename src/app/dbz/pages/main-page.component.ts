import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzServices: DbzService) {}

  get characters() {
    return [...this.dbzServices.characters];
  }

  public onDeleteCharacter(id: string) {
    this.dbzServices.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzServices.addCharacter(character);
  }
}
