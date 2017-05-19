import { connect } from 'react-redux';
import React from 'react';

class MessageFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }

  update () {
    return e => this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
  }
}

export const MessageFormContainer = () => {
  return <div className='message-form-container'></div>;
};
export default connect()(MessageFormContainer);
