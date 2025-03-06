import { ForkMe } from '../src';
import * as styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <ForkMe slug="ribbon-studios/fork-me" backgroundColor="white" color="#272727" newTab={false} />
      <ForkMe slug="ribbon-studios/fork-me" backgroundColor="white" color="#272727" side="left" />
      <div>Left side opens a new tab</div>
      <div>Right side uses this tab</div>
    </div>
  );
}
