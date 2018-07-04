import { HeaderTitleElement } from './header-title';

describe('Header Title Element', ()=> {
  const element = new HeaderTitleElement();
  
  it("should be a Heading", () => {
    expect(element.headerTitle).toBeDefined(HTMLHeadingElement)
  });
  
  it("should have className headetTitle", () => {
    
    expect(element.headerTitle.className).toBe("headerTitle")
  });

  it("should have Inner HTML correct", () => {
    expect(element.headerTitle.innerHTML).toBe('Triangle Jedi')
  });

});