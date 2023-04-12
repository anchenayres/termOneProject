import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  //input veriable to check if user is verified, so our directive can know what to do
  @Input() isVerified: boolean = false;

  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.updateVisibility();
  }

  private updateVisibility() {
    if(this.isVerified) {
      //if its true - show the element div
      this.el.nativeElement.style.display = '';
    } else {
      //we want to hide the element
      this.el.nativeElement.style.display = 'none';
    }
  }

  ngOnChange() { //whenever anything changes
    this.updateVisibility();
    this.cdRef.detectChanges();
  }
}
