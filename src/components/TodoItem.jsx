import React from 'react';
import { destroy } from '../api';

class TodoItem extends React.Component {
  render() {
    const todosUpdater = this.props.todosUpdater;
    const id = this.props.id;
    const title = this.props.title;
    const text = this.props.text;
    const created_at = this.props.created_at;
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{created_at}</td>
        <td>
          <button onClick={() => destroy(id).then(() => todosUpdater())}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
