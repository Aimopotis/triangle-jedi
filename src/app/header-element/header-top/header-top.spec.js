import { HeaderTopElement } from './header-top';

describe('Header Top Element', () => {
  const element = new HeaderTopElement();
  
  it('should be a Div Element', () => {
    expect(element.headerTop).toBeDefined(HTMLDivElement)
  });

  it('should have className headetTop', () => {
    expect(element.headerTop.className).toBe('headerTop')
  });

  it('should have innerHTML correct', () => {
    expect(element.headerTop.innerHTML).toBe(`
      <p>
        <i class="material-icons">fiber_manual_record</i>
        <i class="material-icons">stop</i>
        <i class="material-icons">play_arrow</i>
      </p>`)
  });
});