import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  }
  
  render() {
    return (
      <div>
        <h3>Todo Form</h3>
        <form>
          <div>
            <label>タイトル:</label>
            <input type="text" name="title" value={this.state.title} />
          </div>
          <div>
            <label>テキスト:</label>
            <input type="text" name="text" value={this.state.text} />
          </div>
          <div>
            <input type="submit" value="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
