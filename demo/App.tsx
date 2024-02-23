import { ForkMe } from '../src';
import * as styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <ForkMe slug="rain-cafe/fork-me" backgroundColor="white" color="#272727" newTab={false} />
      <ForkMe slug="rain-cafe/fork-me" backgroundColor="white" color="#272727" side="left" />
      <div>Left side opens a new tab</div>
      <div>Right side uses this tab</div>
    </div>
  );
}
