import { ReactComponent as IconSupervisor } from '../images/icon-supervisor.svg';
import { ReactComponent as IconTeamBuilder } from '../images/icon-team-builder.svg';
import { ReactComponent as IconKarma } from '../images/icon-karma.svg';
import { ReactComponent as IconCalculator } from '../images/icon-calculator.svg';
import styled from 'styled-components';
import Card from './Card';

const Content = styled.div`
margin-bottom: 3em;

@media (min-width: ${props => props.theme.breakpoint.mobile}) {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 
    ". second ."
    "first second fourth"
    "first third fourth"
    ". third .";
    gap: 1em;
}
`;

const Dummy = styled.div`
height: 1em;
`;

export default () => {
    return (
        <Content>
            <Card props={{topBar: 'cyan', title: 'Supervisor', text: 'Monitors activity to identify project roadblocks', icon: <IconSupervisor style={{display: "block", marginLeft: "auto",}} />, gridArea: 'first',}} />
            <Dummy />
            <Card props={{topBar: 'red', title: 'Team Builder', text: 'Scans our talent network to create the optimal team for your project', icon: <IconTeamBuilder style={{display: "block", marginLeft: "auto",}}/>, gridArea: 'second',}}/>
            <Dummy />
            <Card props={{topBar: 'orange', title: 'Karma', text: 'Regularly evaluates our talent to ensure quality', icon: <IconKarma style={{display: "block", marginLeft: "auto",}}/>, gridArea: 'third',}}/>
            <Dummy />
            <Card props={{topBar: 'blue', title: 'Calculator', text: 'Uses data from past projects to provide better delivery estimates', icon: <IconCalculator style={{display: "block", marginLeft: "auto",}}/>, gridArea: 'fourth',}}/>
            <Dummy />
        </Content>
    )
}