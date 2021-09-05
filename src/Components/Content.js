import styled from 'styled-components';
import Card from './Card';
const Content = styled.div`

`;

export default () => {
    return (
        <Content>
            <Card props={{topBar: 'cyan', title: 'Supervisor', text: 'Monitors activity to identify project roadblocks'}}/>
            <Card props={{topBar: 'red', title: 'Team Builder', text: 'Scans our talent network to create the optimal team for your project'}}/>
            <Card props={{topBar: 'orange', title: 'Karma', text: 'Regularly evaluates our talent to ensure quality'}}/>
            <Card props={{topBar: 'blue', title: 'Calculator', text: 'Uses data from past projects to provide better delivery estimates'}}/>
        </Content>
    )
}