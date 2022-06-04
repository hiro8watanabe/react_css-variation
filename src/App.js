import { CsssModules } from './components/CssModules';
import { Emotion } from './components/Emotion';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';
import './styles.css';

export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CsssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
};
