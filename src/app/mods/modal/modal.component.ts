import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [ɵEmptyOutletComponent, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  hasFooter = true;

  constructor(private el: ElementRef){ }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    if(this.el.nativeElement.parentNode === document.body){
      document.body.removeChild(this.el.nativeElement);
    }
    
  }

  onCloseClick(){
    console.log('oncloseClick in action');
    this.close.emit();
  }
}
