import { Validations } from './validations';
import { OutputResult} from './output-result';

export class Listeners{
  form; 
  sideArray = [];
  sideSet = new Set();
  validations;
  outputResult;

  submitPass = true;


  constructor(formInput, output){
    this.form = formInput;
    this.output = output.getElementsByTagName('div')[0];
    this.sideArray = [
      {side : this.form.sideA, error: this.form.getElementsByTagName('span')[0], text: 'Side A'},
      {side : this.form.sideB, error: this.form.getElementsByTagName('span')[1], text: 'Side B'},
      {side : this.form.sideC, error: this.form.getElementsByTagName('span')[2], text: 'Side C'}
      ];
    this.validations = new Validations();
    this.outputResult = new OutputResult(this.output);
  }

  addListeners(){
  this.addInputListeners(this.sideArray); 
  this.addSubmitListeners(this.form, this.sideArray, this.sideSet, this.output, this.submitPass);
  }

  addInputListeners(array) {
    for(let i = 0; i < array.length; i++) {
      array[i].side.onblur = () => {
        this.validations.triangleValidation(array[i].side, array[i].error, array[i].text);
      };
    }
  }

  addSubmitListeners(form, sideArray, sideSet, output, submitPass) {
    form.onsubmit = (event)=>{
      event.preventDefault();
      for(let i = 0; i < sideArray.length; i++) {
      if(this.validations.triangleValidation(sideArray[i].side, sideArray[i].error, sideArray[i].text)){
        submitPass = false;
        output.innerHTML = 'Check the errors young one';
      }
      sideSet.add(sideArray[i].side.value);
      }
      
      if(submitPass){
        this.outputResult.outputRun(sideSet.size);
        form.reset();
        const spanList = document.querySelectorAll('.error');
        spanList.forEach((span)=>{
          span.innerHTML="*Required";
          span.className = "error";
        })
      }
      submitPass = true;
      sideSet.clear();    
    }
  }
}

 
