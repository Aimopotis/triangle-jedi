export class TriangleOutputElement {
  _triangleOutput;

  constructor(){
    this._triangleOutput = document.createElement('div');
    this._triangleOutput.className= 'outputContainer';
    this._triangleOutput.innerHTML= `
      <h2>The Jedi says</h2>
      <div id="outputBox">I am waiting young padawan</div>`;
  }

  get triangleOutput() { return this._triangleOutput; }
}