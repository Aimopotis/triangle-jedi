import { TriangleOutputElement } from './triangle-output';

describe('Triangel Output Element', () => {
const element = new TriangleOutputElement();

  it('should be a Div Element', () => {
    expect(element.triangleOutput).toBeDefined(HTMLDivElement);
  });

  it('should have class outputContainer', () => {
    expect(element.triangleOutput.className).toBe('outputContainer');
  });

  it('should have innerHTML correct', () => {
    expect(element.triangleOutput.innerHTML).toBe(`
      <h2>The Jedi says</h2>
      <div id="outputBox">I am waiting young padawan</div>`);
  });
});