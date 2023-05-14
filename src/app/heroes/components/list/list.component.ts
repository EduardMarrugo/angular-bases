import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public arrayHeroes: string[] = ['Spiderman', 'Superman', 'Batman'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.arrayHeroes.pop();
    console.log({ deleteHero: this.deleteHero });
  }
}
