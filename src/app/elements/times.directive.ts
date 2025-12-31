import { Directive } from '@angular/core';
import { ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewConatiner: ViewContainerRef,
    private templateRef: TemplateRef<any>,) 
    { }

  @Input ('appTimes') set render(times: number){
    this.viewConatiner.clear();

    for(let i = 0; i < times; i++){
      this.viewConatiner.createEmbeddedView(this.templateRef, {});
    }
  }

}
