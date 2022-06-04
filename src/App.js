import { CsssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';
import './styles.css';

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CsssModules />
      <StyledJsx />
    </div>
  );
};
