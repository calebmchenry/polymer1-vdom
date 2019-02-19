import React from "react";
import ReactDOM from "react-dom";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			todos: []
		}

		this.onChange = (event) => {
			this.setState({ input: event.target.value });
		}

		this.onClick = (event) => {
			event.preventDefault()
			this.setState({
				input: '',
				todos: [...this.state.todos, this.state.ipnut]
			});
		}
	}

	render() {
		return (
			<div style={{ border: '1px solid blue' }}>
				<h1>TODO:</h1>
				<input value={this.state.input} type="text" onChange={this.onChange}></input>
				<button onClick={this.onClick}>Add</button>
				<ol>
					{
						this.state.todos.map((item, index) => <li key={index}>{item}</li>)
					}
				</ol>
			</div>
		);
	}
}

Window.ReactTodo = (el) => {
	ReactDOM.render(<TodoList name="React" />, el);
}