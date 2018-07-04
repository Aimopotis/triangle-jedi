import { TriangleFormElement } from './triangle-form';

describe('Triangle Form Element', () => {
  const element = new TriangleFormElement();

  it('should be a Form Element', () => {
    expect(element.triangleForm).toBeDefined(HTMLFormElement);
  });

  it('should have attribute name traingleForm', () =>{
    expect(element.triangleForm.getAttribute('name')).toBe('triangleForm')
  });

  it('should have attribute class traingleForm', () =>{
    expect(element.triangleForm.getAttribute('class')).toBe('triangleForm')
  });

  it('should have attribute autocomplete off', () =>{
    expect(element.triangleForm.getAttribute('autocomplete')).toBe('off')
  });

  it('should have attribute validate', () =>{
    expect(element.triangleForm.hasAttribute('novalidate')).toBeTruthy()
  });
});