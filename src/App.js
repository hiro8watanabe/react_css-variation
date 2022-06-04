import { CsssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import './styles.css';

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CsssModules />
    </div>
  );
};
