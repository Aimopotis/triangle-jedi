import { Validations } from './validations';
import { TriangleFormElement } from '../main-element/triangle-form/triangle-form';

describe('validations', () =>{
  const validations = new Validations();
  let triangleFormElement = new TriangleFormElement();
  let form = triangleFormElement.triangleForm;


  describe('Validation Range Under',()=>{
    
    beforeEach(()=>{
      form.sideA.value = 0;
      validations.validationRangeUnder(form.sideA, form.getElementsByTagName('span')[0]);
     }) 
    
    it('should set side className to lineError if value is 0', () => {
      expect(form.sideA.className).toEqual('lineError');
    });

    it('should change error innerHTML if value is 0', () => {
      expect(form.getElementsByTagName('span')[0].innerHTML).toEqual('<i class="material-icons">report_problem</i> The value should be more then 0');
    });

    it('should set error className to error active', () => {
      expect(form.getElementsByTagName('span')[0].className).toEqual('error active');
    });

    it('should return false', ()=>{
      expect(validations.validationRangeUnder(form.sideA, form.getElementsByTagName('span')[0])).toBeFalsy();
    })
  });

  describe('Validation Value Missing',()=>{
    
    beforeEach(()=>{
     form.sideA.value = '';
     validations.validationValueMissing(form.sideA, form.getElementsByTagName('span')[0], 'side A');
     }) 
        
    it('should set side className to lineError if value is Missing', () => {
      expect(form.sideA.className).toEqual('lineError');
    });

    it('should change error innerHTML if value is Missing', () => {
      expect(form.getElementsByTagName('span')[0].innerHTML).toEqual('<i class="material-icons">report_problem</i> side A is required, darling!');
    });

    it('should set error className to error active', () => {
      expect(form.getElementsByTagName('span')[0].className).toEqual('error active');
    });

    it('should return false', ()=>{
      expect(validations.validationValueMissing(form.sideA, form.getElementsByTagName('span')[0])).toBeFalsy();
    })
  })
  
  describe('Validation Valid',()=>{
   
    beforeEach(()=>{
      form.sideA.value = 1;
      validations.validationValid(form.sideA, form.getElementsByTagName('span')[0]);
      }) 

      it('should set side className to empty if value is valid', () => {
        expect(form.sideA.className).toEqual('');
      });
  
      it('should change error innerHTML if value is valid', () => {
        expect(form.getElementsByTagName('span')[0].innerHTML).toEqual('<i class="material-icons">check_circle</i> Success!');
      });
  
      it('should set error className to error active', () => {
        expect(form.getElementsByTagName('span')[0].className).toEqual('error success');
      });
  
      it('should return false', ()=>{
        expect(validations.validationValid(form.sideA, form.getElementsByTagName('span')[0])).toBeTruthy();
      })
  })
})

