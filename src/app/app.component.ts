import { Component, ViewChild, OnInit, ViewContainerRef, TemplateRef, EmbeddedViewRef } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <ng-template #templateRef>
      <ul *ngIf="true">
        <li>List Item 1</li>
        <ul *ngIf="true">
        <li>List Item 3</li>
        <li>List Item 4</li>
      </ul>
        <li>List Item 2</li>
      </ul>
    </ng-template>
    <div #viewContainerRef class="testing">
    </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  @ViewChild('templateRef', { read: TemplateRef, static: true }) templateRef: TemplateRef<any>;

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}