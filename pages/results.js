import React, {Component} from 'react';
import Layout from '../components/Layout';
import {Button, Container} from 'semantic-ui-react';
import poll from '../ethereum/poll';
import {Link} from '../routes'
import Answer from '../components/Answer';

class FinishedPoll extends Component{
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
        let color;
        return this.props.questions.map((question, index) => {
            if(question[4].localeCompare('Yay') == 0)
                color='green'
            else
                color='red'
                
            return <Answer 
                id={index}
                key={index}
                question={question[0]}
                complete={question[1]}
                answer={question[4]}
                color={color}
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
                    <Button primary size='huge' style={{marginTop: '50px'}}>Ask a question</Button>
                </Link>  
            </Layout>
        );
    }
}

export default FinishedPoll;