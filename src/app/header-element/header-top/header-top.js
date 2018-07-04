export class HeaderTopElement{
  _headerTop;

  constructor(){
    this._headerTop = document.createElement('div');
    this._headerTop.className ='headerTop';
    this._headerTop.innerHTML = `
      <p>
        <i class="material-icons">fiber_manual_record</i>
        <i class="material-icons">stop</i>
        <i class="material-icons">play_arrow</i>
      </p>`;
  }
  
  get headerTop(){ return this._headerTop; }
}