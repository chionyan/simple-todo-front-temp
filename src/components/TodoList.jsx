import React from 'react';
import TodoItem from './TodoItem';
import { index } from '../api';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    index().then(response => this.setState({ todos: response }));
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>テキスト</th>
              <th>作成日時</th>
              <th>削除</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                text={todo.text}
                created_at={todo.created_at}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
