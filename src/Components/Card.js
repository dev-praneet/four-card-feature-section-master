import styled from 'styled-components';

const Card = styled.div`
box-shadow: 0em 0em 0.2em;

@media (min-width: ${props => props.theme.breakpoint.mobile}) {
    grid-row: span 2;
    grid-column: span 1;
    grid-area: ${props => props.props.gridArea};
}
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

const Dummy = styled.div`
height: 2em;
`;

export default (props) => {
    return (
        <Card props={props.props}>
            <TopBar props={props.props}/>
            <Main>
                <Title>
                    {props.props.title}
                </Title>
                <Text>
                    {props.props.text}
                </Text>
                <Dummy />
                <div>
                    {props.props.icon}
                </div>
            </Main>
        </Card>
    )
}