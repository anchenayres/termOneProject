import { Directive } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  constructor() { }

}
