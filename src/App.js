import './CSS/App.css';
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';
import Theme from './Components/Theme';
import Intro from './Components/Intro';
import Content from './Components/Content';

const Container = styled.div`
max-width: min(80%, 375px);
margin: 0 auto;

@media (min-width: ${props => props.theme.breakpoint.mobile}) {
  max-width: 80%;
}
`;

function App() {
return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Intro />
        <Content />
      </Container>
    </Theme>
);
}

export default App;