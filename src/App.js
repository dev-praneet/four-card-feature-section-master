import './CSS/App.css';
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';
import Theme from './Components/Theme';
import Intro from './Components/Intro';
import Content from './Components/Content';

const Container = styled.div`
max-width: 80%;
margin: 0 auto;
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