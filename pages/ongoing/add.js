import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Message, Container} from 'semantic-ui-react';
import {Router} from '../../routes';
import web3 from '../../ethereum/web3';
import poll from '../../ethereum/poll';

class Add extends Component{
    state={
        message: '',
        loading: false,
        description: '',
        show: false
    }
    async componentDidMount(){
        const manager = await poll.methods.manager().call();
        const accounts = await web3.eth.getAccounts();
        if(accounts[0] == manager){
            this.setState({
                show:true
            });
        }
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        this.setState({
            message: '',
            loading: true
        });

        try{
            const accounts = await web3.eth.getAccounts();
            await poll.methods
            .askQuestion(this.state.description)
            .send({
                from:accounts[0]
            });
            Router.pushRoute(`/ongoing`);
        }
        catch (err){
            this.setState({message: err.message});
        }
        this.setState({
            loading: false
        });
    }

    render(){
        return(
            <Layout>
                <Container>
                    <center>
                        {this.state.show ? null : (
                            <Message 
                                warning 
                                header="Sorry"
                                content="Currently only manager can ask questions"
                            />
                        )}
                        <Form inverted onSubmit={this.onSubmit} error={!!this.state.message}>
                            <Form.Input 
                                width={6} label='Question'
                                value={this.state.description}
                                onChange={event => this.setState({description: event.target.value})}    
                            />
                            <Message compact error header="Oops" content={this.state.message} />
                            <br></br>
                            <Button 
                                content='Add Question' 
                                primary 
                                loading={this.state.loading}
                                size='huge'
                                />
                        </Form>
                    </center>
                </Container>
            </Layout>
        );
    }
}
export default Add;