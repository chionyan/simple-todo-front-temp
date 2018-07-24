import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
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
            </tr>
          </thead>
          <tbody>
            <TodoItem
              title="Todo1のタイトル"
              text="Todo1のテキスト"
              created_at="Todo1の作成日時"
            />
            <TodoItem
              title="Todo2のタイトル"
              text="Todo2のテキスト"
              created_at="Todo2の作成日時"
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
