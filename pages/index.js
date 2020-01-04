import React, {Component} from 'react';
import poll from '../ethereum/poll';
import { Button, Header} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class PollIndex extends Component {
    state={
        manager: 'No one'
    };
    async componentDidMount(){
        const manager = await poll.methods.manager().call();
        this.setState({
            manager
        });
    }

    render(){
        return (
            <Layout>
                <Header
                    as='h3'
                    content='This poll is managed by'
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                        }}
                />
                <Header
                    as='h3'
                    content={this.state.manager}
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                        }}
                />
                <Link route="/ongoing">
                    <Button primary size='huge'>View Poll</Button>
                </Link>
            </Layout>
        );
    }
}

export default PollIndex;