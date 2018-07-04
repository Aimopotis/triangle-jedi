import { Listeners } from './listeners';
import { TriangleFormElement } from '../main-element/triangle-form/triangle-form'; 
import { TriangleOutputElement } from '../main-element/triangle-output/triangle-output';


  describe('Listeners', () =>{
    
    let triangleFormElement = new TriangleFormElement();
    let form = triangleFormElement.triangleForm;  

    let triangleOutputElement = new TriangleOutputElement();
    let output = triangleOutputElement.triangleOutput;
    
    let listeners = new Listeners(form,output);
    form.sideA.value = 0;    
   
    describe('addInputListeners', ()=>{
  
      listeners.addInputListeners(listeners.sideArray);
  
      it('sideA should have event listener blur', ()=>{
        expect(listeners.form.sideA.onblur).toBeDefined(listeners.validations.triangleValidation(listeners.form.sideA, listeners.form.getElementsByTagName('span')[0], 'Side A'));
      })
  
      it('sideB should have event listener blur', ()=>{
        expect(listeners.form.sideB.onblur).toBeDefined(listeners.validations.triangleValidation(listeners.form.sideB, listeners.form.getElementsByTagName('span')[1], 'Side B'));
      })
  
      it('sideC should have event listener blur', ()=>{
        expect(listeners.form.sideC.onblur).toBeDefined(listeners.validations.triangleValidation(listeners.form.sideC, listeners.form.getElementsByTagName('span')[2], 'Side C'))
      })
      
    });

   
  });