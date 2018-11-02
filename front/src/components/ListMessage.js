import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListMessage extends Component {
    render() {
        return (
            <div>
                <h2>Messages</h2>
                {this.props.messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </div>          
        )
    }
}

const mapStateToProps = (state) => ({
	messages: state.listMessage.messages
});

export default connect(mapStateToProps, null)(ListMessage);