//--OVERWATCH 2 TANKS TAB-//
//-----------TS-----------//

import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
//Import the Cordova Camera Plugin - App Module TypeScript

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

}

export class ExampleComponent {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'first') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'first';
    }
  };
}