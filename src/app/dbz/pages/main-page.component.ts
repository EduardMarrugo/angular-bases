import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 1000,
    },
    {
      name: 'Krillin',
      power: 350,
    },
  ];
  public onNewCharacter(character: Character): void {
    console.log(character);
    this.characters.push(character);
  }
}
