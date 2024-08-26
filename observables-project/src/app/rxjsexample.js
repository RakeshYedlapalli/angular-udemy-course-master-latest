import { fromEvent } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

// Grabbing the input element
const searchBox = document.getElementById('search-box');

// Creating an observable from keyup events
const keyupObservable = fromEvent(searchBox, 'keyup').pipe(
  map((event) => event.target.value), // Extract input value
  filter(text => text.length > 2),         // Filter for inputs longer than 2 chars
  debounceTime(300)                        // Wait for 300ms of inactivity
);

// Subscribing to the observable to make an API call
keyupObservable.subscribe(searchTerm => {
  // Simulate an API call with the search term
  console.log(`Searching for: ${searchTerm}`);
});