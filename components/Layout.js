import React from 'react';
import {Container, Menu, Segment} from 'semantic-ui-react';
import Head from 'next/head';
import {Link} from '../routes';

export default props => {
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <Segment inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>
                <Menu inverted pointing secondary size='large'>
                    <Container>
                        <Link route="/ongoing">
                            <Menu.Item as='a'>
                                Ongoing Polls
                            </Menu.Item>
                        </Link>
                        <Link route="/results">
                            <Menu.Item as='a'>
                                Results
                            </Menu.Item>
                        </Link>
                        <Link route="/">
                            <Menu.Item as='a' position='right'>
                                Manager
                            </Menu.Item>
                        </Link>    
                    </Container>
                </Menu>
                {props.children}
            </Segment>
        </div>
    );
};