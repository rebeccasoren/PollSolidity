import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Button, Container, Card} from 'semantic-ui-react';
import poll from '../ethereum/poll';
import {Link} from '../routes'

import Question from '../components/Question';
class OngoingPoll extends Component{
    static async getInitialProps(){
        const questionLength = await poll.methods.getQuestionLength().call();
       
        const questions = await Promise.all(
            Array(parseInt(questionLength))
            .fill()
            .map((element, index) => {
                return poll.methods.questions(index).call()
            })
        );
        return{
            questions
        }
    }
    
    renderQuestion(){
        return this.props.questions.map((question, index) => {
            return <Question 
            id={index}
            key={index}
            question={question[0]}
            complete={question[1]}
            />;
        });
    }
    

    render(){
        return(
            <Layout>
                <Container>
                    {this.renderQuestion()}         
                </Container>
                <Link route='/ongoing/add'>
                    <Button primary style={{marginTop: '50px'}} size='huge'>Ask a question</Button>
                </Link>
            </Layout>
        );
    }
}

export default OngoingPoll;