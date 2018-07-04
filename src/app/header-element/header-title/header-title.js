export class HeaderTitleElement{
  _headerTitle;

  constructor(){
    this._headerTitle = document.createElement('h1');
    this._headerTitle.className = 'headerTitle';
    this._headerTitle.innerHTML = 'Triangle Jedi';
  }

  get headerTitle(){ return this._headerTitle; }
}

