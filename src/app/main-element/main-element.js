import { TriangleFormElement } from './triangle-form/triangle-form';
import { TriangleOutputElement } from './triangle-output/triangle-output';

import { Listeners } from '../services/listeners';

export class MainElement {
  _main;
  sectionForm;
  sectionOutput;
  triangleFormElement;
  triangleOutputElement;sssss
  listeners;
  form;
  output;

  constructor(){
    this.triangleFormElement = new TriangleFormElement();
    this.triangleOutputElement = new TriangleOutputElement();
    this.form = this.triangleFormElement.triangleForm;
    this.output = this.triangleOutputElement.triangleOutput;
    this.listeners = new Listeners(this.form, this.output);
    this.listeners.addListeners();
  }

  get main(){
    this.createSections();
    this._main = document.createElement('main');
    this._main.appendChild(this.sectionForm);
    this._main.appendChild(this.sectionOutput);
    return this._main;
  }

  createSections(){
   this.sectionForm = document.createElement('section') ;
   this.sectionForm.className = 'sectionForm';
   this.sectionOutput = document.createElement('section');
   this.sectionOutput.className = 'sectionOutput';

   this.sectionForm.appendChild(this.form);
   this.sectionOutput.appendChild(this.output);
  }

}