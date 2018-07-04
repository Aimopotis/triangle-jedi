export class OutputResult {
  output
  
  constructor (output) { 
    this.output = output;
  }

  outputRun(size){
   switch(size){
      case 1:
      this.output.innerHTML = `<p>The triangle is equilateral</p>`;
      break;
      case 2:
      this.output.innerHTML = `<p>The triangle is isosceles</p>`;
      break;
      case 3:
      this.output.innerHTML = `<p>The triangle is scalene</p>`;
      break;
      default:
      this.output.innerHTML = `<p>How did you do this?</p>`;
    }
  }
}