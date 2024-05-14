import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card-input',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './credit-card-input.component.html',
  styleUrl: './credit-card-input.component.scss'
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;
  public get isReadonly() {
    return this.readonly;
  }
  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return onlyLast4Shown.join('-');
  }
}
