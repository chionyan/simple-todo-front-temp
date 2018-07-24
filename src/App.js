import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
