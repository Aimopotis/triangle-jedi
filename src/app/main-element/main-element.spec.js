import { MainElement } from './main-element';

describe('Main Element', () => {
  const element = new MainElement();
  it('should be Main Element', () => {
    expect(element.main.tagName).toBe('MAIN');
  });

  it('should be true if sectionForm is a Section Element', ()=>{
    expect(element.sectionForm.tagName).toBe('SECTION')
  });

  it('should be true if sectionOutput is a Section Element', ()=>{
    expect(element.sectionOutput.tagName).toBe('SECTION')
  });

  it('should be true if sectionForm className is sectionForm', ()=>{
    expect(element.sectionForm.className).toBe('sectionForm')
  });

  it('should be be true if sectionOutput className is sectionOutput', ()=>{
    expect(element.sectionOutput.className).toBe('sectionOutput')
  });

  it('shoulbe be true if main contains sectionForm', () => {
    expect(element.main.contains(element.sectionForm)).toBeTruthy()
  });

  it('should be true if main contains sectionOutput', () => {
    expect(element.main.contains(element.sectionOutput)).toBeTruthy()
  })
});

