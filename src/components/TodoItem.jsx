import React from 'react';

class TodoItem extends React.Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const created_at = this.props.created_at;
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{created_at}</td>
      </tr>
    );
  }
}

export default TodoItem;
