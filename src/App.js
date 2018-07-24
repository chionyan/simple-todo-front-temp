import React from 'react';
import { index, create, destroy } from './api';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <button onClick={() => index().then(json => console.log(json))}>
          GET /todos
        </button>
        <button onClick={() => create('first todo', 'do it').then(json => console.log(json))}>
          POST /todos
        </button>
        <button onClick={() => destroy('3b35c892-94bd-4949-aca5-5feb40472f51').then(json => console.log(json))}>
          DELETE /todos
        </button>
      </div>
    );
  }
}

export default App;
