import React, {Component} from 'react';
import {Button, Card} from 'semantic-ui-react';

class Answer extends Component{    
    render(){
        const {question,complete, answer} = this.props;
        return(
            <Card.Group centered itemsPerRow={3}>
                {!complete ? null : (
                <Card>  
                    <Card.Content>
                        <Card.Header style={{marginTop:'20px'}}>{question}</Card.Header>
                        <Card.Content>
                            {!complete ? null : (
                                <Button fluid style={{marginTop:'20px'}} color={this.props.color}> {answer} </Button>
                            )}
                        </Card.Content>
                    </Card.Content>   
                </Card>
                )}
            </Card.Group>
        );
    }
}          
export default Answer;