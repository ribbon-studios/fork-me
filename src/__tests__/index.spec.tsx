import '../../global';

import { render } from '@testing-library/react';
import { ForkMe } from '../index';
import * as styles from '../ForkMe.module.scss';

describe('component(ForkMe)', () => {
  it('should render the component', () => {
    const component = render(<ForkMe slug="rain-cafe/fork-me" />);

    expect(component.baseElement).toBeTruthy();
  });

  describe('prop(slug)', () => {
    it('should support a github slug', () => {
      const component = render(<ForkMe slug="rain-cafe/utils" side="left" />);

      const anchor = component.getByTestId('fork-me') as HTMLAnchorElement;

      expect(anchor.href).toContain(`https://github.com/rain-cafe/utils`);
    });
  });

  describe('prop(side)', () => {
    it('should support swapping sides', () => {
      const component = render(<ForkMe slug="rain-cafe/fork-me" side="left" />);

      expect(component.getByTestId('fork-me').classList).toContain(styles.left);
    });
  });

  describe('prop(backgroundColor)', () => {
    it('should support different ribbon colors', () => {
      const component = render(<ForkMe slug="rain-cafe/fork-me" backgroundColor="white" />);

      expect(component.getByTestId('fork-me').style.color).toEqual('white');
    });
  });

  describe('prop(color)', () => {
    it('should support different octocat colors', () => {
      const component = render(<ForkMe slug="rain-cafe/fork-me" color="black" />);

      expect(component.getByTestId('fork-me').style.fill).toEqual('black');
    });
  });
});
