import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'lib-unisys-angular-form-group',
  templateUrl: './unisys-angular-form-group.component.html',
  styleUrls: ['./unisys-angular-form-group.component.scss']
})
export class UnisysAngularFormGroupComponent implements OnInit {

  @Input('translation') translation;
  @Input('placeholderTranslation') placeholderTranslation = '';
  @Input('fieldName') fieldName;
  @Input('type') type = 'input';
  @Input('rows') rows = 1;
  @Input('customClass') customClass = '';
  @Input('checked') checked;
  @Input('appendText') appendText;
  @Input('width') width;
  @Input('property') property = false;
  @Input() group: FormGroup;

  public field;

  constructor(
    private readonly translate: TranslateService
  ) {
    translate.setDefaultLang('sk');
    translate.use('sk');
  }

  ngOnInit() {
    this.field = this.group.controls[this.fieldName];
  }

  public isString(val) {
    return typeof val === 'string';
  }

}
