import { HeaderElement } from './header-element';

describe('Header Element', () => {
const headerElement = new HeaderElement();

  it('shoulde be a Header Element', () => {
    expect(headerElement.header.tagName).toBe('HEADER')
  });

  it('should contain HeaderTopElement', () => {
    expect(headerElement.header.contains(headerElement.headerTopElement)).toBeTruthy();
  });

  it('should contain HeaderTitleElement', () => {
    expect(headerElement.header.contains(headerElement.headerTitleElement)).toBeTruthy();
  });
});