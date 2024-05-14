import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCardInputComponent } from "./credit-card-input/credit-card-input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CreditCardInputComponent]
})
export class AppComponent {
  title = 'credit-card-input';
  creditCardNumber: string = '1234567812345678';
  isReadonly: boolean = true;
}
