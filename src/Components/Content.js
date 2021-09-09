import { ReactComponent as IconSupervisor } from '../images/icon-supervisor.svg';
import { ReactComponent as IconTeamBuilder } from '../images/icon-team-builder.svg';
import { ReactComponent as IconKarma } from '../images/icon-karma.svg';
import { ReactComponent as IconCalculator } from '../images/icon-calculator.svg';
import styled from 'styled-components';
import Card from './Card';
import { getRoles } from '@testing-library/react';

const Content = styled.div`

`;

const IIconSupervisor = <IconSupervisor fill= {"white"}
 style={{marginLeft: "auto", height: "20px",}} />;
const IIconTeamBuilder = <IconTeamBuilder />;
const IIconKarma = <IconKarma />;
const IIconCalculator = <IconCalculator />;

export default () => {
    return (
        <Content>
            <Card props={{topBar: 'cyan', title: 'Supervisor', text: 'Monitors activity to identify project roadblocks', icon: IIconSupervisor}} />
            <Card props={{topBar: 'red', title: 'Team Builder', text: 'Scans our talent network to create the optimal team for your project', icon: IIconTeamBuilder}}/>
            <Card props={{topBar: 'orange', title: 'Karma', text: 'Regularly evaluates our talent to ensure quality', icon: IIconKarma}}/>
            <Card props={{topBar: 'blue', title: 'Calculator', text: 'Uses data from past projects to provide better delivery estimates', icon: IIconCalculator}}/>
        </Content>
    )
}