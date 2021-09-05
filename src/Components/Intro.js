import styled from 'styled-components';

const Intro = styled.div`
padding: 2em 0;
`;

const SubHead = styled.p`
text-align: center;
font-weight: 200;
font-size: 1.4rem;
color: ${props => props.theme.color.veryDarkBlue};
`;

const H1 = styled.h1`

`;

const Text = styled.p`
font-weight: 400;
text-align: center;
padding-top: 1em;
color: ${props => props.theme.color.grayishBlue};
`;

export default () => {
    return (
        <Intro>
            <SubHead>
                Reliable, efficient delivery
            </SubHead>
            <H1>
                Powered By Technology
            </H1>
            <Text>
                Out Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
            </Text>
        </Intro>
    )
}
