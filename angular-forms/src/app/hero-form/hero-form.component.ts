import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Invisibility', 'Super Strength',
            'Flexibility', 'Super Speed'];

  model = new Hero(1, 'Dr Fantastic', this.powers[0], 'Bob Dole');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(2, '', '');
  }
}