import { HeaderTopElement } from './header-top/header-top';
import { HeaderTitleElement } from './header-title/header-title';

export class HeaderElement {
  _header;
  _headerTopElement;
  _headerTitleElement;

  constructor(){
    this._header = document.createElement('header');
    this._headerTopElement = new HeaderTopElement();
    this._headerTitleElement = new HeaderTitleElement();
    this._header.appendChild(this._headerTopElement.headerTop);
    this._header.appendChild(this._headerTitleElement.headerTitle);
  }

 get header(){
   return this._header;
 } 

 get headerTopElement() {
   return this._headerTopElement.headerTop;
 }

 get headerTitleElement() {
  return this._headerTitleElement.headerTitle;
 }
}