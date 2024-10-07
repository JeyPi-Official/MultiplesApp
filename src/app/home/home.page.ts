import { Component } from '@angular/core';
import { MultiplesService } from '../services/multiples.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInput!: number;
  numbers: number[] = [];
  multiples: { multiple: string; numbers: number[]; color: string }[] = [];

  constructor(private multiplesService: MultiplesService) {}

  calculateMultiples() {
    this.numbers = [];
    this.multiples = [];

    // create a list from 0 to user number
    for (let i = 0; i <= this.userInput; i++) {
      this.numbers.push(i);
    }

    // get the multiples
    const multiples3 = this.getMultiples(3);
    const multiples5 = this.getMultiples(5);
    const multiples7 = this.getMultiples(7);

    this.multiples = [
      { multiple: '3', numbers: multiples3, color: 'green' },
      { multiple: '5', numbers: multiples5, color: 'red' },
      { multiple: '7', numbers: multiples7, color: 'blue' },
    ];

    // database query
    this.multiplesService.saveQuery(
      this.userInput,
      this.numbers,
      this.multiples
    );
  }

  // individual selection for each multiple
  getMultiples(multiple: number): number[] {
    const multiples: number[] = [];
    for (let i = 0; i <= this.userInput; i++) {
      if (i % multiple === 0 && i != 0) {
        multiples.push(i);
      }
    }
    return multiples;
  }
}
