import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'lib-unisys-angular-form-group',
  templateUrl: './unisys-angular-form-group.component.html',
  styleUrls: ['./unisys-angular-form-group.component.scss']
})
export class UnisysAngularFormGroupComponent implements OnInit {

  @Input('translation') translation;
  @Input('placeholderTranslation') placeholderTranslation: string = '';
  @Input('fieldName') fieldName;
  @Input('type') type: string = 'input';
  @Input('rows') rows: number = 1;
  @Input('customClass') customClass: string = '';
  @Input() group: FormGroup;

  public field;

  constructor() {
  }

  ngOnInit() {
    this.field = this.group.controls[this.fieldName];
  }

  public isString(val) {
    return typeof val === 'string';
  }

}
