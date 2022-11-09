//--OVERWATCH 2 TANKS TAB-//
//-----------TS-----------//

import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';



import { provideFirestore, getFirestore, collection, doc, setDoc, query, where } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Firestore } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  constructor(private firestore: Firestore,
              private storage: Storage) { }    

 // doomfistDamage = this.firestore.collection('Doomfist');
    
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