import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo Form</h3>
        <form>
          <div>
            <label>タイトル:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>テキスト:</label>
            <input type="text" name="text" />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
