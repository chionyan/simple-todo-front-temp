import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <tr>
        <td>Todo1のタイトル</td>
        <td>Todo1のテキスト</td>
        <td>Todo1の作成日時</td>
      </tr>
    );
  }
}

export default TodoItem;
