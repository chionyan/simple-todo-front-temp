import React from 'react';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Todo List</h3>
        <TodoItem />
      </div>
    );
  }
}

export default App;
