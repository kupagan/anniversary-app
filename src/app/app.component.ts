import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Function to generate the Google search URL for flights to the destination
  getFlightSearchLink(destination: string): string {
    const searchQuery = `flights to ${destination} April 5 to April 20`;
    return `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  }

  // Open the Google search link in a new tab
  openFlightSearch(destination: string): void {
    const link = this.getFlightSearchLink(destination);
    window.open(link, '_blank');
  }
}
