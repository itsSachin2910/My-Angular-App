import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userName: string = ''; // Stores user input
  errorMessage: string = ''; // Stores error message


  title = "Hello from BridgeLabz";
  bridgeLabzLogo: string = "assets/images/BridgeLabz-logo.jpeg";



  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }

  validateUserName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Regex: Starts with uppercase, min 3 letters
    if (!namePattern.test(this.userName)) {
      this.errorMessage = "Invalid Name! First letter must be uppercase and at least 3 letters.";
    } else {
      this.errorMessage = ''; // Clear error if valid
    }
  }
}
