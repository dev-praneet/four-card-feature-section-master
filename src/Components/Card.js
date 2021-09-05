import styled from 'styled-components';

const Card = styled.div`
margin-top: 2em;
box-shadow: 0em 0em 0.1em;
`;

const TopBar = styled.div`
background-color: ${props => props.theme.color[props.props.topBar]};
height: 0.5em;
`;

const Main = styled.div`
padding: 1.5em;
`;

const Title = styled.h2`

`;

const Text = styled.p`
color: ${props => props.theme.color.grayishBlue}
`;

export default (props) => {
    return (
        <Card>
            <TopBar props={props.props}/>
            <Main>
                <Title>
                    {props.props.title}
                </Title>
                <Text>
                    {props.props.text}
                </Text>
            </Main>
        </Card>
    )
}