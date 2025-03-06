import { render } from '@testing-library/react';
import { ForkMe } from '../index';
import styles from '../ForkMe.module.css';
import { describe, expect, it } from 'vitest';

describe('component(ForkMe)', () => {
  it('should render the component', () => {
    const component = render(<ForkMe slug="ribbon-studios/fork-me" />);

    expect(component.baseElement).toBeTruthy();
  });

  describe('prop(slug)', () => {
    it('should support a github slug', () => {
      const component = render(<ForkMe slug="ribbon-studios/utils" side="left" />);

      const anchor = component.getByTestId('fork-me') as HTMLAnchorElement;

      expect(anchor.href).toEqual(`https://github.com/ribbon-studios/utils`);
    });
  });

  describe('prop(side)', () => {
    it('should support swapping sides', () => {
      const component = render(<ForkMe slug="ribbon-studios/fork-me" side="left" />);

      expect(component.getByTestId('fork-me').classList).toContain(styles.left);
    });
  });

  describe('prop(backgroundColor)', () => {
    it('should support different ribbon colors', () => {
      const component = render(<ForkMe slug="ribbon-studios/fork-me" backgroundColor="white" />);

      expect(component.getByTestId('fork-me').style.color).toEqual('white');
    });
  });

  describe('prop(color)', () => {
    it('should support different octocat colors', () => {
      const component = render(<ForkMe slug="ribbon-studios/fork-me" color="black" />);

      expect(component.getByTestId('fork-me').style.fill).toEqual('black');
    });
  });

  describe('prop(newTab)', () => {
    it('should default to opening in a new tab', () => {
      const component = render(<ForkMe slug="ribbon-studios/fork-me" color="black" />);

      const anchor = component.getByTestId('fork-me') as HTMLAnchorElement;

      expect(anchor.target).toEqual('_blank');
    });

    it('should support opening in the current tab', () => {
      const component = render(<ForkMe slug="ribbon-studios/fork-me" color="black" newTab={false} />);

      const anchor = component.getByTestId('fork-me') as HTMLAnchorElement;

      expect(anchor.target).toEqual('');
    });
  });
});
