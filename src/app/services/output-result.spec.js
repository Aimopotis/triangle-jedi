import { OutputResult } from './output-result';

describe('Output Result', () => {
  let output = document.createElement('div');
  let outputResult = new OutputResult(output);
  
  it('should be equilateral if we have lenght of 1', ()=> {
    
    outputResult.outputRun(1);
    expect(outputResult.output.innerHTML).toBe('<p>The triangle is equilateral</p>')
  });

  it('should be isosceles if we have lenght of 2', () =>{
    
    outputResult.outputRun(2);
    expect(outputResult.output.innerHTML).toBe('<p>The triangle is isosceles</p>')
  });

  it('should be scalene if we have lenght of 3', () =>{
    
    outputResult.outputRun(3);
    expect(outputResult.output.innerHTML).toBe('<p>The triangle is scalene</p>')
  });
  
  it('should be bug if we have lenght of 4', () =>{
    
    outputResult.outputRun(4);
    expect(outputResult.output.innerHTML).toBe('<p>How did you do this?</p>')
  });
})