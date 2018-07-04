export class Validations {
  
  triangleValidation(side, error, text) {
    this.validationRangeUnder(side, error)
    this.validationValueMissing(side, error, text)
     
    if(!this.validationValid(side, error)) return true;
  }
  
  validationRangeUnder(side, error) {
    if(side.validity.rangeUnderflow) {
      side.className = 'lineError';
      error.innerHTML = `<i class="material-icons">report_problem</i> The value should be more then 0`;
      error.className ='error active';
    } 
  }

  validationValueMissing(side, error, text){
    if(side.validity.valueMissing){
      side.className = "lineError";
      error.innerHTML = `<i class="material-icons">report_problem</i> ${text} is required, darling!`;
      error.className ='error active';
    } 
  }

  validationValid(side, error){
    if(side.validity.valid){
      side.className =""
      error.innerHTML = `<i class="material-icons">check_circle</i> Success!`;
      error.className = "error success"
      return true;
    } 
  }
}