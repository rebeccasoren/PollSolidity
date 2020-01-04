import React, {Component} from 'react';
import {Button, Card} from 'semantic-ui-react';
import poll from '../ethereum/poll';
import web3 from '../ethereum/web3';
import { Router } from 'next/router';

class Question extends Component{
    state={
        loading: false,
        errorMessage: '',
        show: false
    };
    
    async componentDidMount(){
        const manager = await poll.methods.manager().call();
        const accounts = await web3.eth.getAccounts();
        if(accounts[0] == manager){
            this.setState({
                show:true
            });
        }
    }
    
    voteYes = async () => {
        this.setState({
            loading: true, 
            errorMessage: ''
        });
        
        try{
            const accounts = await web3.eth.getAccounts();
            await poll.methods.voteYay(this.props.id)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/ongoing');
        }
        catch(err){
            this.setState({
                errorMessage: err.message
            });   
        }

        this.setState({loading: false});
    };

    voteNo = async () => {
        this.setState({
            loading: true, 
            errorMessage: ''
        });
        
        try{
            const accounts = await web3.eth.getAccounts();
            await poll.methods.voteNay(this.props.id)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/ongoing');
        }
        catch(err){
            this.setState({
                errorMessage: err.message
            });   
        }

        this.setState({loading: false});
    };
    
    declare = async () => {
        const accounts = await web3.eth.getAccounts();
        await poll.methods.updateAnswer(this.props.id).send({
            from: accounts[0]
        });
        document.location.reload();
    }

    render(){
        const er=this.state.errorMessage;
        const {question,complete} = this.props;
        
        if(er)
            alert(er)
        
        return(
            <Card.Group centered>
            {complete ? null : (
                <Card>
                    <Card.Content>
                        <Card.Header style={{marginTop:'20px'}}>{question}</Card.Header>
                        <Card.Content extra>
                            <div style={{marginTop: '15px'}}>
                                <Button basic color='green' onClick={this.voteYes}>Yay</Button>
                                <Button basic color='red' onClick={this.voteNo}>Nay</Button>
                                {this.state.show ? (<Button fluid onClick={this.declare} style={{marginTop: '15px'}} size='large'>Declare Result</Button>) : null}   
                            </div>
                        </Card.Content>
                    </Card.Content> 
                </Card>
            )}
            </Card.Group> 
        );
    }
}          
export default Question;