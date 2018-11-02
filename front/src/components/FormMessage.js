import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form,FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';
import { addMessage } from '../actions'

class FormMessage extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            name:"",
            message:""
        }; 
    }

    handleSubmit(event) {
        event.preventDefault();
        let message = '';
        fetch('/api/text', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(this.state),
        })
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            this.props.dispatchAddMessage(data.message);            
        }.bind(this))
        .catch(function(res){
            console.log(res)
        })       
        ;
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Jane Doe" value={this.state.name} onChange={(ev)=>this.setState({name:ev.target.value})}/>
                </FormGroup>
                <FormGroup controlId="formInlineMessage">
                    <ControlLabel>Message</ControlLabel>
                    <FormControl type="text" placeholder="Lorem ipsum" value={this.state.message} onChange={(ev)=>this.setState({message:ev.target.value})}/>
                </FormGroup>
                <Button type="submit">Send Message</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
};

export default connect(null, mapDispatchToProps)(FormMessage);