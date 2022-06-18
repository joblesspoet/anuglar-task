import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CanadaPhoneDirective } from './canada-phone.directive';
import { HeloDirectiveDirective } from './helo-directive.directive';

@NgModule({
  declarations: [CanadaPhoneDirective, HeloDirectiveDirective],
  imports: [CommonModule],
  exports: [CanadaPhoneDirective, HeloDirectiveDirective],
})
export class DirectivesModule {}
