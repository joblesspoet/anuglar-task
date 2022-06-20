import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CanadaPhoneDirective } from './canada-phone.directive';

@NgModule({
  declarations: [CanadaPhoneDirective],
  imports: [CommonModule],
  exports: [CanadaPhoneDirective],
})
export class DirectivesModule {}
