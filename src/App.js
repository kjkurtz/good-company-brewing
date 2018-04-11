import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; //sets up react state
  }
  componentWillMount() {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      // update React state when message is added to db
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e) {
    e.preventDefault(); // prevent form submit from reloading page
    fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; // clears input
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button variant="raised" color="primary">
            Hello World
          </Button>
          <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={ el => this.inputEl = el }/>
            <input type="submit"/>
            <ul>
              {
                this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
              }
            </ul>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
