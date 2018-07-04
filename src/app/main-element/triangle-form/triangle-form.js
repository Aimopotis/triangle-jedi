 export class TriangleFormElement {
  _triangleForm;

  constructor(){
    this._triangleForm = document.createElement('form');
    this._triangleForm.setAttribute('name', 'triangleForm');
    this._triangleForm.setAttribute('class', 'triangleForm');
    this._triangleForm.setAttribute('autocomplete', 'off');
    this._triangleForm.setAttribute('novalidate', '');
    this._triangleForm.innerHTML = `
      <h2>Tell the master Jedi the value of each side of a triangle</h2>
      <div class="form-group">
        <label for="sideA" aria-label="Side A"></label>
        <input 
          required
          min="1"
          type="number"
          id="sideA"
          name="sideA"
          placeholder="Side A">
        <span id="errorSideA" class="error" aria-live="polite">*Required</span>
      </div>
      <div class="form-group">
        <label for="sideB" aria-label="Side B"></label>
        <input
          required
          min="1"
          type="number"
          id="sideB"
          name="sideB"
          placeholder="Side B">
        <span id="errorSideB" class="error" aria-live="polite">*Required</span>
      </div>
      <div class="form-group">
        <label for="sideC" aria-label="Side C"></label>
        <input
          required
          min="1"
          type="number"
          id="sideC"
          name="sideC"
          placeholder="Side C">
        <span id="errorSideC" class="error" aria-live="polite">*Required</span>
      </div>
      <button class="btn" type="submit">Submit</button>
    `
  }

  get triangleForm() { return this._triangleForm; }
 };
 
  