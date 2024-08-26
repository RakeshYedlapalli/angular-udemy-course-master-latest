import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged, switchMap } from 'rxjs/operators';



const numbers = interval(1000);

// const takeFourNumbers = numbers.pip;


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements  AfterViewInit {

  results: string[] = []; // Example results

  // ngOnInit(): void {
  //   numbers.pipe(map((value) => value)).subscribe({
  //     next: (val) => console.log(val)

  //   });

  // }

  ngAfterViewInit(): void {
    // Select the input element
    const searchBox = document.getElementById('search-box');
    console.log("Search box element is ->", searchBox);
    
    // Observable for keyup events
    const keyup$ = fromEvent(searchBox!, 'keyup').pipe(
      map((event: any) => event.target.value),   // Get input value
      filter((text: string) => text.length > 2), // Filter inputs longer than 2 chars
      debounceTime(1000),                         // Wait 300ms after the last event
      distinctUntilChanged(),                    // Only emit if the current value is different than the last
      switchMap((searchTerm) => this.fakeApiCall(searchTerm)) // Simulate API call
    );

    // Subscribe to the observable and update the results
    keyup$.subscribe((results: string[]) => {
      console.log("Subscribed");
      
      this.results = results;
    });
  }

  // Simulating an API call to fetch results
  fakeApiCall(searchTerm: string): Promise<string[]> {
    console.log("Faked api called");
    
    const fakeData = ['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple']; // Fake data
    return new Promise((resolve) => {
      const filteredResults = fakeData.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTimeout(() => resolve(filteredResults), 500); // Simulate network delay
    });
  }



}
