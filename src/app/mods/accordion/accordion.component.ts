import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [NgFor, NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items:any = [];
  openedItemIndex = 0;

  onClick(index: number){
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    }else{
      this.openedItemIndex = index;
    }
    
  }
}
