import React from 'react';
import { index, create } from './api';

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
      </div>
    );
  }
}

export default App;
