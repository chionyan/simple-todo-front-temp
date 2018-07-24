import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h3>Todo Form</h3>
        <form>
          <div>
            <label>タイトル:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>テキスト:</label>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
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
